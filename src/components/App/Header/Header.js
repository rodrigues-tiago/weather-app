import "./Header.scss";
import DistritsAPI from "../../../services/DistritsAPI";
import { useState, useEffect, useRef } from "react";

function Header({ globalIdLocal, setGlobalIdLocal }) {
  const { distritsData } = DistritsAPI();
  const selectElement = useRef(null);
  const [districtsOptions, setDistrictsOptions] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);

  const today = new Date(),
    f = new Intl.DateTimeFormat("en-us", {
      weekday: "long",
      month: "long",
      day: "2-digit",
    });

  useEffect(() => {
    setDistrictsOptions(
      distritsData?.data?.map((district) => {
        return <option value={district.local}>{district.local}</option>;
      })
    );

    selectElement.current.value = distritsData?.data?.find(
      (district) => district.globalIdLocal == globalIdLocal
    ).local;
  }, [distritsData]);

  function selectLocation(e) {
    setGlobalIdLocal(
      distritsData?.data?.find((district) => district.local === e.target.value).globalIdLocal
    );
  }

  useEffect(() => {
    const root = document.documentElement;
    root?.style.setProperty("--clr-primary", darkTheme ? "#f4f4f4" : "#232323");

    root?.style.setProperty("--clr-secondary", darkTheme ? "#232323" : "#f4f4f4");
  }, [darkTheme]);

  return (
    <>
      <header className="header">
        <div className="local-info">
          <div class="location">
            <select ref={selectElement} name="location" id="location" onChange={selectLocation}>
              {districtsOptions}
            </select>
          </div>
          <p className="today-date">{f.format(today)}</p>
        </div>

        <div className="options-container">
          <a
            className="about-link"
            href="https://github.com/tiagorodrigues35/weather-app"
            target="_blank"
          >
            ?
          </a>
          <button className="toggle-theme-btn" onClick={() => setDarkTheme(!darkTheme)}></button>
        </div>
      </header>

      <div className="about-container" aria-hidden="true"></div>
    </>
  );
}

export default Header;
