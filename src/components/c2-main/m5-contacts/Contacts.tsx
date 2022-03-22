import React from "react";
import style from './Contacts.module.scss';
import {MainTitle} from '../m6-common/mainTitle/MainTitle';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faTelegramPlane
} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faMapMarkerAlt, faPhone} from "@fortawesome/free-solid-svg-icons";
import {Fade} from "react-awesome-reveal";
import {MainSubTitle} from "../m6-common/mainSubTitle/MainSubTitle";

export const Contacts = () => {
    return (
        <div id='contacts' className={style.contacts}>
            <div className='container'>
                <MainTitle title={'My'} spanTitleText={'Contacts'}/>
                <MainSubTitle subTitle={'CONTACT WITH ME'}/>
                <Fade direction='left' duration={1500}>
                    <div className={style.formWrapper}>
                        <form className={style.form}>
                            <input className={style.formControl} placeholder={'Name*'} type={'text'}/>
                            <input className={style.formControl} placeholder={'Email*'} type={'text'}/>
                            <textarea className={style.formControl} placeholder={'Message*'}/>
                            <input className={style.btn} type={'submit'} value={'send'}/>
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
                                <li><i><FontAwesomeIcon icon={faMapMarkerAlt}/></i>Warsaw, Poland</li>
                            </ul>

                            <div className={style.social}>
                                <a target='_blank' href='https://instagram.com/roman_kachura?utm_medium=copy_link'>
                                    <i><FontAwesomeIcon icon={faInstagram}/></i>
                                </a>
                                <a target='_blank' href='https://www.linkedin.com/in/roman-kachura-201b07229'>
                                    <i><FontAwesomeIcon icon={faLinkedinIn}/></i>
                                </a>
                                <a target='_blank' href='https://t.me/roman_kachura'>
                                    <i><FontAwesomeIcon icon={faTelegramPlane}/></i>
                                </a>
                                <a target='_blank' href='https://www.facebook.com/profile.php?id=100068449718499'>
                                    <i><FontAwesomeIcon icon={faFacebookF}/></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}