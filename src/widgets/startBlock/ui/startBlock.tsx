import React from 'react';
import styles from "./startBlock.module.scss";
import TextType from "../../../shared/ui/textType/textType.tsx";

const StartBlock = () => {
    return (
        <section>
            <div className={styles.img}>
                <img src="" alt=""/>
            </div>
            <div className={styles.content_text}>
                .{}
                <TextType
                    variant={"h1"}
                >
                    Раскройте потенциал вашего ребенка:
                </TextType>
            </div>
        </section>
    );
};

export default StartBlock;