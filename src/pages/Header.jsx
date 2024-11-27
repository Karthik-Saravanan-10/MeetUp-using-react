import style from './Header.module.css'
import { NavLink, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import FavoriteCtx from '../store/Favoritestore';


function Header() {
    let favCtx=useContext(FavoriteCtx);
    //console.log(favCtx.totalfavorite)
    return (<>
        <header>
            <div className={style.head}>
                <h2>Links</h2>
                <ul>
                    <li><NavLink to='/'>All Meetup</NavLink></li>
                    <li><NavLink to='/meet'>Add New Meetup</NavLink></li>
                    <li><NavLink to='/favorite'>My Favorites <span className={style.span}>{favCtx.totalfavorite}</span></NavLink></li>
                </ul>
            </div>
        </header>
        <main className={style.main}>
            <Outlet />
        </main>
    </>)
}

export default Header;