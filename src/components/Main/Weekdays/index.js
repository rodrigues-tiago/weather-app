import "./Weekdays.scss";
import WeekdayCard from "./WeekdayCard";

const Weekdays = ({ selectedWeekday, setSelectedWeekday, weatherData }) => {
  const weekdaysCards = () => {
    return weatherData?.data?.map((weekday, index) => (
      <WeekdayCard id={`card-${index}`} date={weekday.forecastDate} tmin={Math.round(weekday.tMin)} tmax={Math.round(weekday.tMax)} handleOnClick={() => changeDay(index)} />
    ));
  };

  document.getElementById(`card-${selectedWeekday}`)?.classList.add("active");

  const changeDay = (weekday) => {
    setSelectedWeekday(weekday);
    document.querySelectorAll(".weekday-card").forEach((card) => card.classList.remove("active"));
  };
  return <div className="weekdays">{weekdaysCards()}</div>;
};

export default Weekdays;
