import React from "react";
import styles from "./advice.module.scss";

const Advice = ({title, text, imageUrl}) => {
    return (
        <div className={styles.advice}>
            <img width={330} height={162} src={imageUrl} alt="article" />
            <div>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Advice;