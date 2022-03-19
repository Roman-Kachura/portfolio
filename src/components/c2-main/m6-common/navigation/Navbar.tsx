import React from "react";
import style from './Navbar.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";

type NavbarPropsType = {
    headerShow: boolean
    showMobileMenu: boolean
}

export const Navbar = ({headerShow, showMobileMenu}: NavbarPropsType) => {
    let finalClassName = `${style.nav}`;
    if(headerShow) finalClassName += ` ${style.show}`;
    if(showMobileMenu) finalClassName = `${style.showMobileMenu}`;
    return (
        <nav className={finalClassName}>
            <Link activeClass={style.active}
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
            >
                Главная
            </Link>
            <Link activeClass={style.active}
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-60}
            >
                Скиллы
            </Link>
            <Link activeClass={style.active}
                  to="works"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-60}
            >
                Работы
            </Link>
            <Link activeClass={style.active}
                  to="contacts"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-60}
            >
                Контакты
            </Link>
        </nav>
    )
}