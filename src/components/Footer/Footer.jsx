import React, {useState} from 'react';
import styles from './styles.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img className={styles.logoImg} width={55} height={55} src="images/logo.png" alt="logo" />
                    <p className={styles.logoName}>Guap<br/> Articles</p>
                </div>
                <div className={styles.about}>
                    <p>О проекте</p>
                    <p>Этот сайт был создан для удобства организации научной деятельности преподавателей и студентов ГУАП</p>
                </div>
                <div className={styles.relations}>
                    <p>Связь с разработчиками</p>
                    <img src="./images/developersLinks.svg" alt="Developers" />
                </div>
                <div className={styles.addition}>
                    <p>Дополнительно</p>
                    <p>Lorem ipsum</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;