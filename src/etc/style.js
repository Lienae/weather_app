// styles.js
import styled from "styled-components";

// 애플리케이션 전체를 래핑하는 스타일 컴포넌트
export const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

// 안드로이드 바 스타일 컴포넌트
export const AndroidBar = styled.div`
  height: 24px;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
  margin-bottom: 24px;
`;

// 날씨 정보를 보여주는 카드 스타일 컴포넌트
export const WeatherCard = styled.div`
  background: #2f80ed;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 20px;
  width: 300px;
  text-align: center;
`;

// 사용자로부터 입력을 받는 필드
export const InputField = styled.input`
  padding: 12px;
  border: none;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 20px;
  background-color: #f2f2f2;
  box-sizing: border-box;
`;

// 도시 이름을 표시하는 타이틀
export const CityName = styled.h1`
  color: white;
  padding: 10px;
  border-radius: 5px;
`;

// 날씨 정보를 표시하는 영역
export const WeatherInfo = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(211, 211, 211, 0.5);
`;

// 기온 정보를 표시하는 영역
export const TempInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  font-size: 14px;
  color: white;
`;

// 즐겨찾기 버튼을 담는 영역
export const ButtonWrap = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1.2fr 1.2fr; 
  grid-template-rows: 30px 30px;
  justify-content: space-evenly;
  margin-top: 10px;
`;

// 즐겨찾기 버튼
export const WeatherButton = styled.button`
  padding: 7px;
  border: none;
  border-radius: 5px;
  color: black;
  background-color: white;
  font-size: 11px;
  margin: 5px;
`;

// 날짜 정보를 표시하는 영역
export const DateInfo = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  color: white;
`;

// 즐겨찾기 필드
export const FavoriteWrap = styled.div`
  display: flex; 
  width: 100%; 
  align-items: center;
  padding: 4px;
`;

// 즐겨찾기를 추가하는 필드
export const FavoriteInputField = styled.input`
  margin-left: 20px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 70%;
  font-size: 10px;
  box-sizing: border-box;
`;

// 즐겨찾기 버튼
export const FavoriteButton = styled.button`
  display: inline;
  margin-left: 5px;
  padding: 10px;  
  border-radius: 30%;
  background-color: #ffdde1;
`;
