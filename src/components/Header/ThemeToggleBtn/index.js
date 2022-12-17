import "./ThemeToggleBtn.scss";

function ThemeToggleBtn({ handleOnClick }) {
  return <button className="theme-toggle-btn" onClick={handleOnClick}></button>;
}

export default ThemeToggleBtn;
