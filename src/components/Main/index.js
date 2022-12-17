import "./Main.scss";
import MainInfo from "./MainInfo";
import Weekdays from "./Weekdays";
import useWeatherType from "../../hooks/useWeatherType";

function Main({ selectedWeekday, setSelectedWeekday, weatherData }) {
  const { weatherTypeData } = useWeatherType();
  return (
    <main className="main-content">
      <MainInfo selectedWeekday={selectedWeekday} weatherData={weatherData} weatherTypeData={weatherTypeData} />
      <hr className="line-separation" />
      <Weekdays selectedWeekday={selectedWeekday} setSelectedWeekday={setSelectedWeekday} weatherData={weatherData} weatherTypeData={weatherTypeData} />
    </main>
  );
}

export default Main;
