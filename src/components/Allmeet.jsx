import style from "./Allmeet.module.css";
import { useContext } from "react";
import FavoriteCtx from "../store/Favoritestore";

function Allmeet({ section }) {
  //const [listFav, setlistFav] = useState(false);
  let listFav;
  const favCtx = useContext(FavoriteCtx);
  if (favCtx.hasFavorite(section.id)) {
    listFav = true;
  } else {
    listFav = false;
  }

  function toggleFavoriteStatusHandler() {
    const hasFav = favCtx.hasFavorite(section.id);
    //setlistFav(!listFav);
    //console.log(favCtx)
    if (hasFav) {
      favCtx.removeFavorite(section.id);
    } else {
      favCtx.addFavorite({
        id: section.id,
        meetTitle: section.meetTitle,
        meetDetail: section.meetDetail,
        meetImage: section.meetImage,
        meetAddress: section.meetAddress,
      });
    }
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
          <button onClick={toggleFavoriteStatusHandler}>
            {listFav ? "Remove Favorite" : "Add Favorite"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Allmeet;
