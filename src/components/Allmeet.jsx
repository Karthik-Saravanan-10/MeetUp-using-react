import style from "./Allmeet.module.css";
import { useState } from "react";


function Allmeet({ section }) {
  let [listFav,setlistFav]=useState(false);
  function favoriteBtnHandler(){
    setlistFav(!listFav);
    console.log(section)
  }
  return (
    <>
      {section.map((elem) => {
        return (
          <div className={style.card} key={elem.id}>
            <div className={style.image}>
              <img src={elem.meetImage} alt="" />
            </div>
            <div className={style.content}>
              <h3>{elem.meetTitle}</h3>
              <address>{elem.meetAddress}</address>
              <p>{elem.meetDetail}</p>
            </div>
            <div className={style.actions}>
              <button onClick={favoriteBtnHandler}>{listFav?"Remove Favorite":"Add Favorite"}</button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Allmeet;
