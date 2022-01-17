// /* global kakao */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { Container } from "../styles";
import Pp from "../images/pp.jpg";
import MedicalDetail from "../components/MedicalDetail";

// import cn from "classnames";

const { kakao } = window;

export const MedicalContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.white};
  padding: 4rem 2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MedicalTitle = styled.h1`
  width: 100%;
  margin-bottom: 2vw;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 20px;
  }
`;

const Selector = styled.select`
  outline: none;
  border: none;
  width: 21rem;
  height: 3rem;
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #707070;
  border: 0.2rem solid #63b5f6;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  text-align: center;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: 80%;
  }
  &:hover {
    color: #707070;
    background-color: #eceff1;
  }
`;

const Options = styled.option`
  padding: 2rem;
  box-sizing: border-box;
  margin: 1vw;
  border-radius: 30px;
  border: 1px solid red;
  @media ${({ theme }) => theme.device.mobile} {
    width: 60%;
  }
`;

const ListDivBox = styled.div`
  padding: 2rem;
  border: border-box;
  border: 2px solid #63b5f6;
  background: #fafafa;
  width: 20%;
  float: left;
  font-size: 12px;
  & div {
    margin-bottom: 4px;
  }
  & h3 {
    margin-bottom: 1rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    font-size: 5px;
  }
`;

const HoverTag = styled.div`
  cursor: pointer;
  padding: 0.5vw;
  &:hover {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.hover};
    border-radius: 2px;
    // padding: 1px;
  }
`;

const Medical = ({ medical, medicalInfoHandling, userInfo }) => {
  const [medicalInfo, setMedicalInfo] = useState({
    place_name: "",
    address_name: "",
    phone: "",
  });

  const [nowLocation, setNowLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  // const [defaultPosition, setDefaultPostion] = useState({
  //   latitude: 0,
  //   longitude: 0,
  // });
  // const [address, setAddress] = useState({ area: "", sigg: "", addr: "" });
  const getPosition = () => {
    navigator.geolocation.watchPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setNowLocation({ latitude: latitude, longitude: longitude });
        // setDefaultPostion({ latitude: latitude, longitude: longitude });
        axios({
          method: "get",
          url: "https://dapi.kakao.com/v2/local/geo/coord2address",
          headers: {
            Authorization: "KakaoAK 5af6de5262a6de0991283e152a2597c5",
          },
          params: {
            x: longitude,
            y: latitude,
            query: keyword,
          },
        })
          .then((res) => {
            // console.log(latitude);
            // console.log(longitude);
            // console.log("위치기반 : ", JSON.stringify(res.data));
            return res.data.documents[0].address;
          })
          .then((address) => {
            // setAddress({
            //   area: address.region_1depth_name,
            //   sigg: address.region_2depth_name,
            //   addr: address.address_name,
            // });
          })
          .catch((err) => {
            console.log(err);
          });
      },
      (err) => {
        alert("위치권한을 허용해주세요");
      }
    );
  };
  const navigate = useNavigate();

  // 검색결과 배열에 담아줌
  const [Places, setPlaces] = useState([]);

  // 검색 키워드 담는 변수
  const [keyword, setKeyword] = useState(medical);

  // 키워드 바꿔주는 함수 onChange함수
  const handler = (e) => {
    setKeyword(e.target.value);
    navigate("/medicallist");
  };
  // 검색 키워드
  const search = ["치과", "내과", "산부인과"];

  useEffect(() => {
    getPosition();
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      // center: new kakao.maps.LatLng(
      //   nowLocation.longitude,
      //   nowLocation.latitude
      // ),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(keyword, placesSearchCB, {
      x: nowLocation.longitude,
      y: nowLocation.latitude,
    });

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
        // 페이지 목록 보여주는 displayPagination() 추가
        displayPagination(pagination);
        setPlaces(data);
      }
    }

    // 검색결과 목록 하단에 페이지 번호 표시
    function displayPagination(pagination) {
      var paginationEl = document.getElementById("pagination"),
        fragment = document.createDocumentFragment(),
        i;

      // 기존에 추가된 페이지 번호 삭제
      while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild);
      }

      for (i = 1; i <= pagination.last; i++) {
        var el = document.createElement("button");
        el.href = "#";
        el.innerHTML = i;

        if (i === pagination.current) {
          el.className = "on";
        } else {
          el.onclick = (function (i) {
            return function () {
              pagination.gotoPage(i);
            };
          })(i);
        }

        fragment.appendChild(el);
      }
      paginationEl.appendChild(fragment);
    }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      kakao.maps.event.addListener(marker, "click", function () {
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
          // 지도안의 마커 네임
        );
        infowindow.open(map, marker);
      });
    }
  }, [keyword]);
  // console.log("Place : ", Places);
  // 병원 상세 페이지
  const detailPage = (item, e) => {
    setMedicalInfo({
      place_name: item.place_name,
      address_name: item.address_name,
      phone: item.phone,
    });
  };
  // console.log("medicalInfo : ", medicalInfo);

  return (
    <MedicalContainer>
      <MedicalTitle>병원 목록 & 상세페이지</MedicalTitle>
      <Selector onChange={handler}>
        <Options disabled selected>
          진료과목을 선택해 주세요.
        </Options>
        {search.map((el, i) => {
          return (
            <Options value={el} key={i}>
              {el}
            </Options>
          );
        })}
      </Selector>

      {/* 지도 start */}
      <div>
        <div
          id="myMap"
          style={{
            width: "100%",
            height: "25vw",
            border: "2px solid #63b5f6",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        ></div>
      </div>
      {/* 지도 end */}

      {/* 병원 리스트 start */}
      <ListDivBox>
        <div id="result-list">
          {Places.map((item, i) => (
            <div
              key={i}
              style={{
                borderBottom: "2px solid #63b5f6",
              }}
            >
              {/* <span style={{}}>{i + 1}</span> 각 병원의 순서 및 숫자*/}
              <HoverTag>
                <div onClick={(e) => detailPage(item, e)}>
                  <h3>{item.place_name}</h3>
                  {item.road_address_name ? (
                    <div>
                      <span>{item.road_address_name}</span>
                      {/* <span>{item.address_name}</span> // 지번주소 */}
                    </div>
                  ) : (
                    <span>{item.address_name}</span>
                  )}
                  {/* <span>{item.phone}</span> */}
                </div>
              </HoverTag>
            </div>
          ))}
          <div id="pagination" style={{ textAlign: "center" }}></div>
        </div>
      </ListDivBox>
      <MedicalDetail medicalInfo={medicalInfo} userInfo={userInfo} />
      <div style={{ clear: "both" }}></div>
    </MedicalContainer>
  );
};

export default Medical;
