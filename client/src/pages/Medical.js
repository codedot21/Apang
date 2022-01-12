/* global kakao */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const { kakao } = window;

const Selector = styled.select`
  padding: 1rem;
  box-sizing: border-box;
  width: 30%;
  margin: 1vw;
  border-radius: 20px;
  border: 1px solid black;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
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

const DivBox = styled.div`
  display: flex;
`;

const Medical = ({ medical, medicalInfoHandling }) => {
  // const [, updateState] = useState();
  // const forceUpdate = useCallback(() => updateState({}), []);

  const navigate = useNavigate();
  const serch = [
    { key: 1, value: "치과" },
    { key: 2, value: "산부인과" },
    { key: 3, value: "내과" },
    { key: 4, value: "정형외과" },
    { key: 5, value: "성형외과" },
  ];

  // console.log(medical);
  const [keyword, setKeyword] = useState(medical);
  // console.log(keyword);
  const serchHandler = (e) => {
    setKeyword(e.target.value);
    navigate("/medicallist");
  };
  console.log(keyword);

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    let markers = [];
    let mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    // 지도를 생성합니다
    let map = new kakao.maps.Map(mapContainer, mapOption);

    // 장소 검색 객체를 생성합니다
    let ps = new kakao.maps.services.Places();

    // 키워드로 장소를 검색합니다
    ps.keywordSearch(keyword, placesSearchCB);

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        let bounds = new kakao.maps.LatLngBounds();

        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);

        displayPagination(pagination);
        setPlaces(data);
      }
    }

    function displayPagination(pagination) {
      var paginationEl = document.getElementById("pagination"),
        fragment = document.createDocumentFragment(),
        i;

      // 기존에 추가된 페이지 번호 삭제
      while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild);
      }

      for (i = 1; i <= pagination.last; i++) {
        var el = document.createElement("a");
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

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );
        infowindow.open(map, marker);
      });
    }

    console.log("loading kakaomap");
  }, [keyword]);

  const detailPage = (item, e) => {
    console.log("클릭");
    medicalInfoHandling(item);
    e.preventDefault();
    navigate("/medicaldetail");
  };

  return (
    <div>
      <Selector value={keyword} onChange={serchHandler}>
        {serch.map((el, index) => {
          return (
            <Options value={el.value} key={el.key}>
              {el.value}
            </Options>
          );
        })}
      </Selector>
      <DivBox>
        <div
          id="map"
          style={{
            width: "50vw",
            height: "30vw",
            borderRadius: "20px",
            border: "1px solid black",
            dispay: "flex",
          }}
        ></div>
        <div id="result-list">
          {places.map((item, i) => (
            <div key={i} style={{ padding: "10px" }}>
              <span>{i + 1}</span>
              <div>
                <h5 onClick={(e) => detailPage(item, e)}>{item.place_name}</h5>
                {item.road_address_name ? (
                  <div>
                    <span>{item.road_address_name}</span>
                    <span>{item.address_name}</span>
                  </div>
                ) : (
                  <span>{item.address_name}</span>
                )}
                <span>{item.phone}</span>
              </div>
            </div>
          ))}
          <div id="pagination"></div>
        </div>
      </DivBox>
    </div>
  );
};

export default Medical;
