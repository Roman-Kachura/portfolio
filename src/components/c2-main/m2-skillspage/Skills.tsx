import React from "react";
import style from './Skills.module.scss';
import {SkillItem} from "./SkillItem";
import {MainTitle} from "../m6-common/mainTitle/MainTitle";
import {skills} from "./skill-data";
import {Fade} from "react-awesome-reveal";


export const Skills = () => {
    return (
        <section id='skills' className={style.skills}>
            <div className={'container'}>
                <MainTitle title={'Мои'} spanTitleText={'Навыки'}/>
                <Fade direction='left' duration={1500}>
                    <div className={style.skillsContent}>
                        {
                            skills.map((s,i) => <SkillItem key={`SkillItem ${i}`}/>)
                        }
                    </div>
                </Fade>

            </div>
        </section>
    )
}