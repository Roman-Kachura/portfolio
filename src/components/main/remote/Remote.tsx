import React from "react";
import style from './Remote.module.css';

export const  Remote = () => {
    return(
        <div className={style.remote}>
            <div className='container'>
                <h3 className={'title' + ' ' + style.title}>Рассматриваю варианты удаленной работы</h3>
                <a className={style.link} href={''}>Нанять меня</a>
            </div>
        </div>
    )
}