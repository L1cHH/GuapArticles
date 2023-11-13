import React from "react";
import styles from "./styles.module.scss";
const SearchBlock = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.topicBlock}>
                    <p>Тема статьи</p>
                    <img width={12} height={6} src="./images/arrow.svg" alt="arrow" />
                </div>
                <div className={styles.rightBlock}>
                    <div className={styles.magazine}>
                        <p>Журнал</p>
                        <img width={12} height={6} src="./images/arrowBlack.svg" alt="arrow" />
                    </div>
                    <div className={styles.search}>
                        <input type="text" placeholder="Поиск..."/>
                        <img width={25} height={25} src="./images/inputSvg.svg" alt="input" />
                    </div>
                    <a href="./">
                        <p>Продвинутый<br /> Поиск</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SearchBlock;