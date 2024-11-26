import Allmeet from "../components/Allmeet";
import style from "./Header.module.css";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function Meetupview() {
  let [getData, setgetData] = useState([]);
  let [loading, setloading] = useState(false);
  useEffect(() => {
    fetch(
      "https://react-meet-5924c-default-rtdb.asia-southeast1.firebasedatabase.app/meetup.json"
    )
      .then((res) => res.json())
      .then((data) => {
        let OgArray = [];

        for (let i in data) {
          let meetUp = { id: i, ...data[i] };
          OgArray.push(meetUp);
        }
        setgetData(OgArray);
        setloading(true);
      });
  }, []);
  return (
    <>
      <h1 className={style.Tittle}>All MEETSUP</h1>
      {!loading ? (
        <section>
          <p className={style.loader}>Loading...</p>
        </section>
      ) : (
        <section>
          {getData.map((elem) => {
            return <Allmeet section={elem} key={elem.id}/>;
          })}
        </section>
      )}
    </>
  );
}

export default Meetupview;
