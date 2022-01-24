import React from "react";
import WeatherCard from "../molecules/WeatherCard";

const MainContent = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
        padding: "30px 0 15px",
        flexWrap: "wrap",
      }}
    >
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </div>
  );
};

export default MainContent;
