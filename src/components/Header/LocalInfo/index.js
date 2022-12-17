import "./LocalInfo.scss";
import editIcon from "../../../img/edit-icon.png";

function LocalInfo({ weekday, month, setGlobalIdLocal }) {
  let day = new Date().getDate();

  const editLoc = () => {
    document.getElementById("loc-input").removeAttribute("disabled");
    document.getElementById("loc-input").focus();
  };

  return (
    <div>
      <div className="local-info">
        <div class="location">
          <input type="text" name="" id="loc-input" placeholder="Lisboa, Portugal" disabled></input>
          <button onClick={() => editLoc()}>
            <img src={editIcon} className="edit-icon"></img>
          </button>
        </div>
        <p className="date">
          {weekday}, {day} {month}
        </p>
      </div>
    </div>
  );
}

export default LocalInfo;
