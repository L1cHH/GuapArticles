import React from "react";
import styles from "./styles.module.scss";

const FindBlock = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.textBlock}>
                    <h1>Исследуйте с нами</h1>
                    <p>Хранилище для более чем 500 статей на разные темы от студентов и преподавателей ГУАП, с функциями проверки, публикации и просмотра. Удобные функции выгрузки данных для отчетов и помощь студентам в привлечении в научную деятельность.
                    </p>
                    <div className={styles.buttons}>
                        <button className={styles.btn}>Смотреть статьи <img width={11} height={21} src="./images/rightArrow.svg" alt="Arrow" /></button>                  
                        <button className={styles.btn}>Найти куратора <img width={11} height={21}  src="./images/rightArrow.svg" alt="Arrow" /></button>                            
                    </div>
                </div>
                <img width={500} height={500} src="./images/mainHeader.svg" alt="MainHeader" />
            </div>
        </div>
    );
}

export default FindBlock;