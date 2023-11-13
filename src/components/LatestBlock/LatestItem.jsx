import React from "react";
import styles from "./latestItem.module.scss";
import Button from "./Button";

const LatestItem = () => {
    return (
        <div className={styles.latestItem}>
            <div className={styles.container}>
                <div className={styles.leftBlock}>
                    <h2>Особенности освободительной борьбы колоний испанской Америки</h2>
                    <h3 className={styles.author}>Автор: </h3>
                    <h3>Тип публикации: </h3>
                    <h3>DOI: </h3>
                    <button>Найти статью по DOI</button>
                </div>
                <div className={styles.rightBlock}>
                    <h2>2023</h2>
                    <Button/>
                    <Button/>
                </div>
            </div>
        </div>
    );
}

export default LatestItem;