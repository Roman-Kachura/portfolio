import React from "react";
import style from './Works.module.css';

export const WorksItem = () => {
    return(
        <div className={style.worksItem}>
            <div className={style.image}>
                <div className={style.img}></div>
                <a href='' className={style.link}>Смотреть</a>
            </div>

            <div className={style.description}>
                <h4 className={style.projectTitle}>Название проекта</h4>
                <div className={style.projectText}>Подробное описание проекта</div>
            </div>
        </div>
    )
}