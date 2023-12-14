import React, {FC} from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

type NavbarPType = {}

export const Navbar: FC<NavbarPType> = (props) => {
    const {} = props;
    return (
        <nav className={s.nav}>
            <div>
                <NavLink className = {({isActive}) => isActive ? s.active: s.item}
                         to={'/profile'}><h2>Profile</h2> </NavLink>
            </div>
            <div>
                <NavLink className={ ({isActive})=> isActive ? s.active : s.item}
                         to={'/dialogs'}><h2>Dialogs</h2> </NavLink>
            </div>
            <div>
                <NavLink className={ ({isActive})=> isActive ? s.active : s.item}
                         to={'/news'}><h2>News</h2> </NavLink>
            </div>
            <div>
                <NavLink className={ ({isActive})=> isActive ? s.active : s.item}
                         to={'/music'}><h2>Music</h2> </NavLink>
            </div>
            <div>
                <NavLink className={ ({isActive})=> isActive ? s.active : s.item}
                         to={'/settings'}><h2>Settings</h2> </NavLink>
            </div>
        </nav>
    );
};
