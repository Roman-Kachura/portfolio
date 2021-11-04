import React from "react";
import style from './Home.module.css';

export const Home = () => {
    return(
        <section className={style.home}>
            <div className={'container' + ' ' + style.container}>
                <div className={style.homeWrapper}>
                    <h1 className={style.text}>
                        Привет!<br/>
                        Меня зовут Роман Качура.<br/>
                        Я - front-end разработчик.
                    </h1>
                    <div className={style.image}>
                        <img src={'https://cspromogame.ru//storage/upload_images/avatars/856.jpg'}/>
                    </div>
                </div>
            </div>
        </section>
    )
}