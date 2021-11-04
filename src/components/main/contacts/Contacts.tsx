import React from "react";
import style from './Contacts.module.css';

export const Contacts = () => {
    return(
        <div className={style.contacts}>
            <div className='container'>
                <h3 className={'title' + ' ' + style.title}>Контакты</h3>
                <form className={style.form}>
                    <input type={'text'}/>
                    <input type={'text'}/>
                    <textarea/>
                    <input type={'submit'}/>
                </form>
            </div>
        </div>
    )
}