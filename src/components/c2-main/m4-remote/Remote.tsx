import React from "react";
import style from './Remote.module.scss';
import {MainTitle} from "../m6-common/mainTitle/MainTitle";
import {Fade} from "react-awesome-reveal";

export const Remote = () => {
    return (
        <div id='remote' className={style.remote}>
            <div className='container'>
                <MainTitle className={style.title} title={'Расматриваю варианты'} spanTitleText={'удаленной работы'}/>
                <Fade direction='left' duration={1500}>
                    <a className={style.link} href={''}>Нанять меня</a>
                </Fade>
            </div>
        </div>
    )
}