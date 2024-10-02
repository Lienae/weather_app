import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import ProfileCard from "./13/ProfileCard";
//import Provider from "./13/provider";
//import Blocks from "./15/Blocks";
import Weather from "./etc/Weather";
//import Blocks from "./15_1/Blocks";
//import PopulationSearch from "./project/countryPopulation";
//import CountryInfo from "./project/countryInfo";
//import displayMap  from "./etc/api2";
//import WeatherMap from "./etc/WeatherMap";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Weather />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
