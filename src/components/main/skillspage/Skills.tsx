import React from "react";
import style from './Skills.module.css';
import {SkillItem} from "./SkillItem";

export const Skills = () => {
    return (
        <section className={style.skills}>
            <div className={'container'}>
                <h3 className={'title' + ' ' + style.title}>Skills</h3>
                <div className={style.skillsContent}>
                    <SkillItem/>
                    <SkillItem/>
                    <SkillItem/>
                </div>
            </div>
        </section>
    )
}