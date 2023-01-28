import "./WeekdayCard.scss";
import { useRef, useEffect } from "react";

function WeekdayCard({ cardRefCollection, forecastDate, tmin, tmax, index, setSelectedWeekday }) {
  const cardRef = useRef();

  const date = new Date(forecastDate),
    f = new Intl.DateTimeFormat("en-us", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });

  useEffect(() => {
    cardRefCollection.current.push(cardRef.current);
  }, []);

  useEffect(() => {
    if (index === 0) {
      cardRef.current.classList.add("active");
    }
  }, []);

  function changeDay(index) {
    cardRefCollection.current.forEach((card) => card.classList.remove("active"));
    cardRef.current.classList.add("active");
    setSelectedWeekday(index);
  }

  return (
    <button className="weekday-card" onClick={() => changeDay(index)} ref={cardRef}>
      <img src="" className="" />
      <p>{f.format(date)}</p>
      <p>
        {tmin}ºC — {tmax}ºC
      </p>
    </button>
  );
}

export default WeekdayCard;
