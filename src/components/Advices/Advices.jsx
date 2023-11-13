import React, {useState} from "react";
import styles from "./styles.module.scss";
import Advice from "./Advice";

const Advices = () => {
    const [advices, setAdvices] = useState([
        {"name": "Правила публикации", "wrappedText": "cgegyurgyvgyervy", "imageUrl": "./images/articleImg.svg"},
        {"name": "Правила написания статей", "wrappedText": "cbvsjhbvjhebsjkbv", "imageUrl": "./images/articleImg.svg"},
        {"name": "Правила получения денег", "wrappedText": "aaaaaaaaaaa", "imageUrl": "./images/articleImg.svg"},
        {"name": "Получение отчетности", "wrappedText": "bbbbbbbbbbbbbb", "imageUrl": "./images/articleImg.svg"},
    ]);

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1>Советы</h1>
                <div className={styles.advices}>
                    {advices.map((obj, index) => (
                        <Advice
                            key={index}
                            title={obj.name}
                            text={obj.wrappedText}
                            imageUrl={obj.imageUrl}
                        />
                    ))}                                      
                </div>
            </div>
        </div>
    );
}

export default Advices;