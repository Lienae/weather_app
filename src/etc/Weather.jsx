// #region 01. Import 문
import { useState } from "react";
import { searchWeather } from "./api";
import {
  AppWrap,
  AndroidBar,
  WeatherCard,
  InputField,
  CityName,
  WeatherInfo,
  TempInfo,
  ButtonWrap,
  WeatherButton,
  DateInfo,
  FavoriteWrap,
  FavoriteInputField,
  FavoriteButton,
} from "./style"; 
// #endregion

// 02. 변수 선언
function Weather() {
 // #region 02-01. 변수 선언
 const [location, setLocation] = useState(""); // 사용자가 입력한 도시명을 관리하는 상태 변수
 const [favoriteLocation, setFavoriteLocation] = useState(""); // 사용자가 즐겨찾기로 설정한 도시명을 관리하는 상태 변수
 const [result, setResult] = useState({}); // 날씨 API로부터 받아온 결과를 관리하는 상태 변수
 const [locations, setLocations] = useState([]); // 즐겨찾기로 설정된 도시들을 관리하는 상태 변수
 const [timer, setTimer] = useState("00:00:00");  // 현재 시간 변수


// #region 03-01. 날씨 ID -> 한국어로 번역
  const translateWeatherId = (weatherId) => {
    const weatherIdKo = {
      200: '가벼운 비를 동반한 천둥구름',
      201: '비를 동반한 천둥구름',
      202: '폭우를 동반한 천둥구름',
      210: '약한 천둥구름',
      211: '천둥구름',
      212: '강한 천둥구름',
      221: '불규칙적 천둥구름',
      230: '약한 연무를 동반한 천둥구름',
      231: '연무를 동반한 천둥구름',
      232: '강한 안개비를 동반한 천둥구름',
      300: '가벼운 안개비',
      301: '안개비',
      302: '강한 안개비',
      310: '가벼운 적은비',
      311: '적은비',
      312: '강한 적은비',
      313: '소나기와 안개비',
      314: '강한 소나기와 안개비',
      321: '소나기',
      500: '약한 비',
      501: '중간 비',
      502: '강한 비',
      503: '매우 강한 비',
      504: '극심한 비',
      511: '우박',
      520: '약한 소나기 비',
      521: '소나기 비',
      522: '강한 소나기 비',
      531: '불규칙적 소나기 비',
      600: '가벼운 눈',
      601: '눈',
      602: '강한 눈',
      611: '진눈깨비',
      612: '소나기 진눈깨비',
      615: '약한 비와 눈',
      616: '비와 눈',
      620: '약한 소나기 눈',
      621: '소나기 눈',
      622: '강한 소나기 눈',
      701: '박무',
      711: '연기',
      721: '연무',
      731: '모래 먼지',
      741: '안개',
      751: '모래',
      761: '먼지',
      762: '화산재',
      771: '돌풍',
      781: '토네이도',
      800: '구름 한 점 없는 맑은 하늘',
      801: '약간의 구름이 낀 하늘',
      802: '드문드문 구름이 낀 하늘',
      803: '구름이 거의 없는 하늘',
      804: '구름으로 뒤덮인 흐린 하늘',
      900: '토네이도',
      901: '태풍',
      902: '허리케인',
      903: '한랭',
      904: '고온',
      905: '바람부는',
      906: '우박',
      951: '바람이 거의 없는',
      952: '약한 바람',
      953: '부드러운 바람',
      954: '중간 세기 바람',
      955: '신선한 바람',
      956: '센 바람',
      957: '돌풍에 가까운 센 바람',
      958: '돌풍',
      959: '심각한 돌풍',
      960: '폭풍',
      961: '강한 폭풍',
      962: '허리케인'
    };
    return weatherIdKo[weatherId] || weatherId;
  };
// #endregion
  
// #region 03-02. 날씨 검색
  const handleKeyDown = async (e) => {
    // Enter 입력하면
    if (e.key === "Enter") {
      handleSearchWeather(location); // 날씨를 검색한다.
    }
  };

  // handleSearchWeather : 날씨 검색 수행
  const handleSearchWeather = async (location) => {
    const data = await searchWeather(location); // data : api.js 코드에서 받은 결과값(= 도시이름)
    // data의 세부정보를 변수에 저장  
      const icon = data.data.weather[0].icon;     // icon : 해당 도시의 날씨 아이콘의 고유 번호
      const weatherId = data.data.weather[0].id;  // weatherId : 해당 도시의 날씨 ID
      data.data.weather[0].description = translateWeatherId(weatherId); // 날씨 ID를 가지고 한국어로 알맞게 번역함(04-02 과정)
      data.data.weather[0].iconSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`; // 아이콘에 맞는 이미지 파일을 불러옴
      setResult(data);  // 마지막으로 결과값 저장
  };

// #region 04-03. 입력한 도시 즐겨찾기
  const handleClickFavorite = async (e, location) => {
    e.preventDefault();
if (location && !locations.includes(location)) { // 도시명이 비어있지 않고, 이미 존재하지 않을 때만 추가
setLocations([...locations, location]);
}
handleSearchWeather(location);
};

// #endregion

// #region 03-04. 현재 시간 받아오기
  const currentTimer = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    setTimer(`${hours}:${minutes}:${seconds}`)
  }
  // 실시간(1초마다)으로 현재 시간 업데이트
  const startTimer = () => {
    setInterval(currentTimer, 1000) // 1000 = 1초
  }
// #endregion

startTimer() // 함수 실행

// #region 03-01. 렌더링 부분
  return (
    <AppWrap>          
      <WeatherCard>
        <AndroidBar>
          <div>{timer}</div>
          <div>100%🔋</div>
        </AndroidBar>  
        <InputField
          placeholder="도시를 입력하세요."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          onKeyDown={handleKeyDown}
        />       
        {Object.keys(result).length !== 0 && (
          <WeatherInfo>
            <DateInfo>{new Date().toLocaleDateString()}</DateInfo>
            <CityName className="city">{result.data.name}</CityName>
            <img className="icon" src={result.data.weather[0].iconSrc} alt="weather-icon" />
            <h2 className="temp">{Math.round(result.data.main.temp * 10) / 10}°C</h2>
            <p className="description">{result.data.weather[0].description}</p>
            <TempInfo>  
              <h5 className="feels_like">체감온도: {Math.round(result.data.main.feels_like * 10) / 10}°C</h5>
              <h5 className="feels_like">최고: {Math.round(result.data.main.temp_max * 10) / 10}°C</h5>
              <h5 className="feels_like">최저: {Math.round(result.data.main.temp_min * 10) / 10}°C</h5>
            </TempInfo>
            <FavoriteWrap>
            <FavoriteInputField
              placeholder="즐겨찾기할 도시를 입력하세요."
              value={favoriteLocation}
              onChange={(e) => setFavoriteLocation(e.target.value)}
              type="text"
              />  
              <FavoriteButton onClick={(e) => handleClickFavorite(e, favoriteLocation)}>♡</FavoriteButton>         
            </FavoriteWrap>
            <ButtonWrap>
              {locations.map((location, index) => (
                <WeatherButton key={index} onClick={(e) => handleClickFavorite(e, location)}>
                  {location}
                </WeatherButton>
              ))}
            </ButtonWrap>
          </WeatherInfo>
        )}                  
      </WeatherCard>      
    </AppWrap>
  );
// #endregion
}

export default Weather;