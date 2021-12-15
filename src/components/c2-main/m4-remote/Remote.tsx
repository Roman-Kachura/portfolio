import React from "react";
import style from './Remote.module.scss';
import {MainTitle} from "../m6-common/mainTitle/MainTitle";

export const  Remote = () => {
    return(
        <div className={style.remote}>
            <div className='container'>
                <MainTitle className={style.title} title={'Расматриваю варианты'} spanTitleText={'удаленной работы'}/>
                <a className={style.link} href={''}>Нанять меня</a>
            </div>
        </div>
    )
}