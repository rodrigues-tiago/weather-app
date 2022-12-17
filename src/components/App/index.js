import "./App.scss";
import Header from "../Header";
import Main from "../Main";
import { useEffect, useState } from "react";
import useAPICaller from "../../services/useAPICaller";
import useGetDay from "../../hooks/useGetDate";

function App() {
  const { weatherData, setGlobalIdLocal } = useAPICaller();
  const [selectedWeekday, setSelectedWeekday] = useState(0);
  const { weekday, month } = useGetDay();
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Header weekday={weekday} month={month} handleOnClick={() => toggleTheme()} setGlobalIdLocal={setGlobalIdLocal} />
      <Main selectedWeekday={selectedWeekday} setSelectedWeekday={setSelectedWeekday} weatherData={weatherData} />
    </div>
  );
}

export default App;
