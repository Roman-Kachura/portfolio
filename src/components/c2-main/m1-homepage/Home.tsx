import React from "react";
import style from './Home.module.scss';

export const Home = () => {
    return (
        <section className={style.home}>
            <div className={`container ${style.container}`}>
                <div className={style.homeWrapper}>
                    <h1 className={style.homeTitle}>
                        <div className={style.divWrapper}>Привет!</div>
                        <div className={style.divWrapper}> Я - <span className={style.homeTitleName}>Роман Качура</span></div>
                    </h1>
                    <div className={style.homeTitleProfession}>Front-end разработчик.</div>
                </div>
            </div>
        </section>
    )
}