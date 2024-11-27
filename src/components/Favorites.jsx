import { useContext } from "react";
import FavoriteCtx from "../store/Favoritestore";
import Allmeet from "./Allmeet";

function Favorites() {
  const favCtx = useContext(FavoriteCtx);
  let count = favCtx.totalfavorite;
  let countList = favCtx.favorite;
  let space;


  if (count) {
    space = countList.map((elem) => {
      return <Allmeet section={elem} key={elem.id} />;
    });
  } else {
    space = (
      <div>
        <h3>Not Yet Favorites!</h3>
        <p>Add to Favorites</p>
      </div>
    );
  }


  
  return (
    <>
      <section>{space}</section>
    </>
  );
}

export default Favorites;
