import { Children, createContext, useContext, useState } from "react";

let FavoriteCtx=createContext({
    favorite:[],
    totalfavorite:0,
    addFavorite:(FavMeetUp)=>{},
    removeFavorite:(MeetUpId)=>{},
    hasFavorite:(MeetUpId)=>{}
})

function Favoritestore({children}){
    let[favoriteList,setfavoriteList]=useState([]);

    function addFavoriteHandler(FavMeetUp){
        setfavoriteList((prev)=>prev.concat(FavMeetUp))
    }

    function removeFavoriteHandler(MeetUpId){
        setfavoriteList((prev)=>prev.filter(meetup.id !== MeetUpId))
    }

    function hasFavoriteHandler(MeetUpId){
        setfavoriteList((prev)=>prev.some(meetup.id === MeetUpId))
    }

    let Context=useContext({
        favorite:favoriteList,
        totalfavorite:favoriteList.length,
        addFavorite:addFavoriteHandler,
        removeFavorite:removeFavoriteHandler,
        hasFavorite:hasFavoriteHandler
    })

    return(<FavoriteCtx.Provider>
        {children}
    </FavoriteCtx.Provider>)
}

export default Favoritestore;