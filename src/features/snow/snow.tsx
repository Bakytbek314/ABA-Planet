import React, {FC} from 'react';
import styles from "./snow.module.scss";

const Snow: FC = () => {

    const snowflakes = Array.from({ length: 100 });

    return (
        <div className={styles.snow_container}>
            {snowflakes.map((_, index) => {
                const style = {
                    '--random-left': Math.random(),
                    '--random-offset': Math.random(),
                    '--random-duration': Math.random(),
                    '--random-delay': Math.random(),
                    fontSize: `${Math.random() * 1.5 + 0.5}rem`,
                    opacity: Math.random() * 0.8 + 0.2,
                } as React.CSSProperties;

                return <div key={index} className={styles.snowflake} style={style}>❄</div>;
            })}
        </div>
    );
};

export default Snow;