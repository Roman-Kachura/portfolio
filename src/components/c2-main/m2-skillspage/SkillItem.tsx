import React from "react";
import style from './Skills.module.scss';
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import i from './icons/css-3.png'

type SkillItemPropsType = {
    icon:IconDefinition
    title:string
    description:string
}

export const SkillItem = () => {
    return(
        <div className={style.skillItem}>
            <img src={'./icons/css-3.png'}/>
        </div>
    )
}