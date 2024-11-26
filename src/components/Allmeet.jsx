import style from "./Allmeet.module.css";
import { useState } from "react";

function Allmeet({ section }) {
  let [listFav, setlistFav] = useState(false);
  function favoriteBtnHandler() {
    setlistFav(!listFav);
    console.log(section);
  }
  return (
    <>
      <div className={style.card} key={section.id}>
        <div className={style.image}>
          <img src={section.meetImage} alt="" />
        </div>
        <div className={style.content}>
          <h3>{section.meetTitle}</h3>
          <address>{section.meetAddress}</address>
          <p>{section.meetDetail}</p>
        </div>
        <div className={style.actions}>
          <button onClick={favoriteBtnHandler}>
            {listFav ? "Remove Favorite" : "Add Favorite"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Allmeet;
