import React, {useEffect, useState} from "react";
import style from './Header.module.scss';
import {Navbar} from "../c2-main/m6-common/navigation/Navbar";
import {IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

type HeaderPropsType = {
    headerShow: boolean
}

export const Header = ({headerShow, ...props}: HeaderPropsType) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const finalClassName = headerShow ? `${style.header} ${style.show}` : `${style.header}`;
    const onClickHandler = () => {
        setShowMobileMenu(!showMobileMenu);
    }
    return (
        <header className={finalClassName}>
            <div className={'container'}>
                <Navbar headerShow={headerShow} showMobileMenu={showMobileMenu}/>
                <IconButton size='medium' onClick={onClickHandler} aria-label='Menu' color={'inherit'} className={style.menuBtn}>
                    <MenuIcon />
                </IconButton>
            </div>
        </header>
    )
}