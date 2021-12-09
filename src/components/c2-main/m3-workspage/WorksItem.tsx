import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import style from './Works.module.scss';
import {faEye} from "@fortawesome/free-solid-svg-icons";

type worksItemPropsType = {
    text:string
    title:string
}

export const WorksItem = ({text,title}:worksItemPropsType) => {
    return (
        <div className={style.worksItem}>
                <div className={style.image}>
                    <div className={style.imageWrapper}/>
                    <a href='' className={style.link}>
                        <i><FontAwesomeIcon icon={faEye}/></i>
                    </a>
                </div>

                <div className={style.description}>
                    <h4 className={style.projectTitle}>{title}</h4>
                    <div className={style.projectText}>{text}</div>
                </div>
        </div>
    )
}