import TextType from "../../../shared/ui/textType/textType.tsx";
import Button from "../../../shared/ui/button/button.tsx";
import styles from "./startBlock.module.scss";

import Photo from "../../../shared/assets/images/startBlockPhoto.png";
import CirclesPhoto from "../../../shared/assets/images/circles.png";

const StartBlock = () => {
    return (
        <section className={styles.start_block_section}>
            <div className="container">
                <div className={styles.start_block}>
                    <div className={styles.img}>
                        <img src={Photo} alt=""/>
                    </div>
                    <div className={styles.content_text}>
                        <div className={styles.title}>
                            <TextType
                                variant={"h1"}
                                weight={"semiBold"}
                            >
                                Раскройте потенциал вашего ребенка:
                            </TextType>
                        </div>
                        <div className={styles.text}>
                            <TextType variant={"bigP"} color={"grey"}>
                                В нашей практике развитии детей мы понимаем уникальные потребности каждого ребенка. Наша
                                опытная
                                команда стремится обеспечить индивидуальный уход и поддержку, чтобы помочь вашему малышу
                                процветать
                            </TextType>

                        </div>
                        <div className={styles.buttons}>
                            <Button size={"full"} color={"green"}>
                                <TextType variant={"mediumP"}>
                                    Цены
                                </TextType>
                            </Button>
                            <Button size={"full"} color={"grey"}>
                                <TextType variant={"mediumP"}>
                                    Записаться на прием
                                </TextType>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.circles_photo}>
                <img src={CirclesPhoto} alt="photo"/>
            </div>
        </section>
    );
};

export default StartBlock;