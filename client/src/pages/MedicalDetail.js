const MedicalDetail = ({ medicalInfo }) => {
  console.log("Detail : ", medicalInfo);
  return (
    // medicalInfo. 안에있는 항목들
    // address_name: "서울 마포구 서교동 353-22"
    // category_group_code: "HP8"
    // category_group_name: "병원"
    // category_name: "의료,건강 > 병원 > 내과"
    // distance: ""
    // id: "7934119"
    // phone: "02-3143-2220"
    // place_name: "서울본내과의원"
    // place_url: "http://place.map.kakao.com/7934119"
    // road_address_name: "서울 마포구 양화로 133"
    // x: "126.92098259393505"
    // y: "37.55523269567481"
    // 위의 값들밖에 없어요.
    <div>
      <div>
        <h1>{medicalInfo.place_name}</h1>
        <div>여기는 기본이미지</div>
        <hr></hr>
        <div>{medicalInfo.phone}</div>
        <div>{medicalInfo.address_name}</div>
      </div>
      <hr></hr>
      <div>
        <div>여기는 리뷰 쓰는 공간</div>
      </div>
      <hr></hr>
      <div>
        <div>여기는 리뷰 나오는 공간</div>
      </div>
    </div>
  );
};

export default MedicalDetail;
