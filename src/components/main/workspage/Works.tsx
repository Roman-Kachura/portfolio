import React from "react";
import style from './Works.module.css';
import {WorksItem} from "./WorksItem";

export const Works = () => {
    return(
        <section className={style.works}>
            <div className={'container'}>
                <h3 className={'title' + ' ' + style.title}>My Works</h3>
                <div className={style.worksContent}>
                    <WorksItem/>
                    <WorksItem/>
                </div>
            </div>
        </section>
    )
}