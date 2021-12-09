import React from "react";
import style from './Navbar.module.scss';

export const Navbar = () => {
    return(
        <nav className={style.nav}>
            <a href="">Главная</a>
            <a href="">Скиллы</a>
            <a href="">Работы</a>
            <a href="">Контакты</a>
        </nav>
    )
}