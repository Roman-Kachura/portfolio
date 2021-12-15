import React from "react";
import s from './MainTitle.module.scss';

type MainTitlePropsType = {
    title:string
    spanTitleText:string
    className?:string
}

export const MainTitle = ({title,spanTitleText,...props}:MainTitlePropsType) => {
    const finalClassName = props.className ? `${props.className} ${s.title}` : `${s.title}`;
    return(
        <div className={s.mainTitle}>
            <h4 className={finalClassName}>{title} <span>{spanTitleText}</span></h4>
        </div>
    )
}