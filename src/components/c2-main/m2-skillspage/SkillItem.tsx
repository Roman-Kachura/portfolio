import React from "react";
import style from './Skills.module.scss';
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type SkillItemPropsType = {
    icon:IconDefinition
    title:string
    description:string
}

export const SkillItem = ({title,icon,description}:SkillItemPropsType) => {
    return(
        <div className={style.skillItem}>
            <div className={style.icon}>
                <i><FontAwesomeIcon icon={icon}/></i>
            </div>
            <h2 className={style.technology}>{title}</h2>
            <p className={style.text}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, et architecto! Iure impedit nostrum tempore minus amet! Debitis asperiores, ab magni mollitia molestiae saepe modi pariatur ducimus voluptate numquam hic?
                Pariatur libero, animi dolores, quae, suscipit architecto aperiam perferendis vitae ratione aliquam totam ipsa impedit delectus ab placeat. Mollitia itaque harum laudantium voluptas quas. A quam consectetur optio voluptas illo.
            </p>
        </div>
    )
}