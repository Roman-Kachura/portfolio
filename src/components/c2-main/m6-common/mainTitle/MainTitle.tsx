import React from "react";
import s from './MainTitle.module.scss';

type MainTitlePropsType = {
    title:string
    spanTitleText:string
}

export const MainTitle = ({title,spanTitleText}:MainTitlePropsType) => {
    return(
        <div className={s.mainTitle}>
            <h4>{title} <span>{spanTitleText}</span></h4>
        </div>
    )
}