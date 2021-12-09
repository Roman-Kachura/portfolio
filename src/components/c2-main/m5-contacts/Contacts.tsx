import React from "react";
import style from './Contacts.module.scss';
import {MainTitle} from '../m6-common/mainTitle/MainTitle';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn, faMailchimp,
    faTelegramPlane
} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faMailBulk, faMapMarked, faMapMarker, faMarker, faPhone} from "@fortawesome/free-solid-svg-icons";

export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className='container'>
                <MainTitle title={'мои'} spanTitleText={'контакты'}/>
                <div className={style.formWrapper}>
                    <form className={style.form}>
                        <input className={style.formControl} placeholder={'Name*'} type={'text'}/>
                        <input className={style.formControl} placeholder={'Email*'} type={'text'}/>
                        <textarea className={style.formControl} placeholder={'Message*'}/>
                        <input className={style.btn} type={'submit'}/>
                    </form>
                    <div className={style.contactInfo}>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and type setting industry when an unknown printer took
                                a galley of type
                            </p>

                        <ul>
                            <li><i><FontAwesomeIcon icon={faPhone}/></i>+48 732 899 950</li>
                            <li><i><FontAwesomeIcon icon={faEnvelope}/></i>roma.kachyra@gmail.com</li>
                            <li><i><FontAwesomeIcon icon={faMapMarker}/></i>Warsaw, Poland</li>
                        </ul>

                        <div className={style.social}>
                            <a href='#'>
                                <i><FontAwesomeIcon icon={faInstagram}/></i>
                            </a>
                            <a href='#'>
                                <i><FontAwesomeIcon icon={faLinkedinIn}/></i>
                            </a>
                            <a href='#'>
                                <i><FontAwesomeIcon icon={faTelegramPlane}/></i>
                            </a>
                            <a href='#'>
                                <i><FontAwesomeIcon icon={faFacebookF}/></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}