import React, {useState} from "react";
import styles from "./styles.module.scss";
import LatestItem from "./LatestItem";

const LatestNews = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1>Последние новости</h1>
                <div className={styles.lastNews}>
                    <LatestItem/>
                    <LatestItem/>
                </div>
            </div>
        </div>     
    );
}

export default LatestNews;