import React from "react";
import style from './Works.module.scss';
import {WorksItem} from "./WorksItem";
import {MainTitle} from "../m6-common/mainTitle/MainTitle";

export const Works = () => {
    return(
        <section className={style.works}>
            <div className={'container'}>
               <MainTitle title={'Мои'} spanTitleText={'Работы'}/>
                <div className={style.worksContent}>
                    <WorksItem text={'Какое-то описание первого проекта'} title={'заголовок первого проекта'}/>
                    <WorksItem
                        text={'Какое-то описание второго проекта'}
                        title={'заголовок второго  проекта'}
                    />
                </div>
            </div>
        </section>
    )
}