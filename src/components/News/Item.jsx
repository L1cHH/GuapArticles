import React from "react";
import styles from "./item.module.scss";

const Item = ({title, text, imageUrl}) => {
    return (
        <div className={styles.item}>
            <div>
                <img width={400} height={221} src={imageUrl} alt="article" />
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Item;