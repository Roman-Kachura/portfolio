import React from "react";
import style from './Home.module.scss';

export const Home = () => {
    return (
        <section className={style.home}>
            <div className={`container ${style.container}`}>
                <div className={style.homeWrapper}>
                    <h1 className={style.homeTitle}>
                        Привет! Я - <span className={style.homeTitleName}>Роман Качура</span>
                    </h1>
                    <div className={style.homeTitleProfession}>и Я - front-end разработчик.</div>
                </div>
            </div>
        </section>
    )
}