import React, {useState} from "react";
import styles from "./styles.module.scss";
import Item from "./Item";

const News = () => {
    const [news, setNews] = useState([
        {"name": "Обновление базы данных студеiygfuyeagfygeaygfuegregag", "wrappedText": "cgegyurgyvgyervy", "imageUrl": "./images/articleImg.svg"},
        {"name": "Добавление функции просмотра", "wrappedText": "cbvsjhbvjhebsjkbv", "imageUrl": "./images/articleImg.svg"},
        {"name": "Изменения в системе", "wrappedText": "aaaaaaaaaaa", "imageUrl": "./images/articleImg.svg"},
    ]);

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1>Новости</h1>
                <div className={styles.news}>
                    {news.map((obj, index) => (
                        <Item 
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

export default News;