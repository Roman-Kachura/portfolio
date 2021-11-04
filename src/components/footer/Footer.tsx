import React from "react";
import style from './Footer.module.css';

export const Footer = () => {
    return(
        <footer className={style.footer}>
            <div className='container'>
                <h3 className={'title'}>Роман Качура</h3>
                <div className={style.social}>
                    <a className={style.link} href={''}><div className={style.icon}>1</div></a>
                    <a className={style.link} href={''}><div className={style.icon}>2</div></a>
                    <a className={style.link} href={''}><div className={style.icon}>3</div></a>
                    <a className={style.link} href={''}><div className={style.icon}>4</div></a>
                </div>
                <div className={style.copyright}>
                    <small>&copy; 2021 Все права защищены</small>
                </div>
            </div>
        </footer>
    )
}