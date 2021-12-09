import React from "react";
import style from './Header.module.scss';
import {Navbar} from "../c2-main/m6-common/navigation/Navbar";

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={'container'}>
                <Navbar/>
            </div>
        </header>
    )
}