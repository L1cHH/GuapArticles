import React, {useState} from 'react';
import styles from './styles.module.scss';
import {Link} from 'react-router-dom';




const Header = () => {

    const [connectMenu, setConnectMenu] = useState(false);
    const handleConnect = () => setConnectMenu(!connectMenu);

    const [catalog, setCatalog] = useState(false);
    const handleCatalog = () => setCatalog(!catalog);

    return (
        <header>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img className='logo-icon' width={55} height={55} src="images/logo.png" alt="logo" />
                    <p className='logo-name'>Guap<br/> Articles</p>
                </div>
                <div className={styles.navbar}>
                    <ul >
                        <div className={styles.catalog} >
                            <li className={styles.first} onClick={handleCatalog}>Каталог</li>
                            {catalog ? <div className={styles.menuCatalog}>
                                <a href="">Пункт меню</a>
                                <a href="">Пункт меню</a>
                                <a href="">Пункт меню</a>
                            </div> : null}
                        </div>
                        <li>Популярное</li>
                        <li>Новости</li>
                        <li>Мои статьи</li>
                    </ul>
                </div>
                <div className={styles.profile}>
                    <button className={styles.btn}>Опубликовать</button>
                    <div className={styles.dropDown}>
                        <img onClick={handleConnect} width={55} height={55} src="images/Account Icon.png" alt="Account" />
                        {connectMenu ? <div className={styles.dropDownMenu}>
                            <a href="">Войти</a>
                            <a href="">Зарегистрироваться</a>
                        </div> : null}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;