import "./WeekdayCard.scss";

const WeekdayCard = ({ id, date, tmin, tmax, handleOnClick }) => {
  return (
    <button id={id} className="weekday-card" onClick={handleOnClick}>
      <img src="" className="" />
      <p>{date}</p>
      <p>
        {tmin}ºC — {tmax}ºC
      </p>
    </button>
  );
};

export default WeekdayCard;
