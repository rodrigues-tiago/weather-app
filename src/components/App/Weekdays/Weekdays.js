import "./Weekdays.scss";
import WeekdayCard from "./WeekdayCard/WeekdayCard";
import { useState, useEffect, useRef } from "react";
import React from "react";

function Weekdays({ weatherData, setSelectedWeekday }) {
  const cardRefCollection = useRef([]);

  const weekdaysCards = weatherData?.data?.map((weekday, index) => {
    return (
      <WeekdayCard
        key={index}
        cardRefCollection={cardRefCollection}
        forecastDate={weekday.forecastDate}
        tmin={Math.round(weekday.tMin)}
        tmax={Math.round(weekday.tMax)}
        index={index}
        setSelectedWeekday={setSelectedWeekday}
      />
    );
  });

  return <nav className="weekdays">{weekdaysCards}</nav>;
}

export default Weekdays;
