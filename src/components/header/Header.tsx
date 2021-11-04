import React from "react";
import style from './Header.module.css';
import {Navbar} from "../navigation/Navbar";

export const Header = () => {
    return(
        <header className={style.header}>
            <Navbar/>
        </header>
    )
}