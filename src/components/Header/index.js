import "./Header.scss";
import LocalInfo from "./LocalInfo";
import ThemeToggleBtn from "./ThemeToggleBtn";

function Header({ weekday, month, setGlobalIdLocal, handleOnClick }) {
  return (
    <header className="header">
      <LocalInfo weekday={weekday} month={month} setGlobalIdLocal={setGlobalIdLocal} />
      <ThemeToggleBtn handleOnClick={handleOnClick} />
    </header>
  );
}

export default Header;
