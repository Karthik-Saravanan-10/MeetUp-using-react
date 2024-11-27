import { createContext, useState } from "react";

const FavoriteCtx = createContext({
  favorite: [],
  totalfavorite: 0,
  addFavorite: (FavMeetUp) => {},
  removeFavorite: (MeetUpId) => {},
  hasFavorite: (MeetUpId) => {},
});

export function Favoritestore({ children }) {
  const [favoriteList, setfavoriteList] = useState([]);

  function addFavoriteHandler(FavMeetUp) {
    setfavoriteList((prevfavoriteList) => {
      return prevfavoriteList.concat(FavMeetUp);
    });
  }

  function removeFavoriteHandler(MeetUpId) {
    setfavoriteList((prevfavoriteList) => {
      return prevfavoriteList.filter(fav=> fav.id !== MeetUpId);
    });
  }

  function hasFavoriteHandler(MeetUpId) {
    return favoriteList.some(fav => fav.id===MeetUpId)
  }

  let context = {
    favorite: favoriteList,
    totalfavorite: favoriteList.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    hasFavorite: hasFavoriteHandler,
  };

  return (
    <FavoriteCtx.Provider value={context}>{children}</FavoriteCtx.Provider>
  );
}

export default FavoriteCtx;
