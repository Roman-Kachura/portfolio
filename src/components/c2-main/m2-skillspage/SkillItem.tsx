import React from "react";
import style from './Skills.module.scss';
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import i from './icons/css-3.png';



type SkillItemPropsType = {
    src:string
    name:string
}

export const SkillItem = (props:SkillItemPropsType) => {
    return(
        <div className={style.skillsItem}>
            <img src={props.src} alt={props.name} title={props.name}/>

        </div>
    )
}