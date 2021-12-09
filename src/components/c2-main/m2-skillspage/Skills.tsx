import React from "react";
import style from './Skills.module.scss';
import {SkillItem} from "./SkillItem";
import {MainTitle} from "../m6-common/mainTitle/MainTitle";
import {skills} from "./skill-data";


export const Skills = () => {
    return (
        <section className={style.skills}>
            <div className={'container'}>
                <MainTitle title={'Мои'} spanTitleText={'Навыки'}/>
                <div className={style.skillsContent}>
                    {
                        skills.map(s => <SkillItem icon={s.icon} title={s.title} description={s.description}/>)
                    }
                </div>
            </div>
        </section>
    )
}