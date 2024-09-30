import {SwiperSlide} from "swiper/react";
import SwiperContainer from "../../../features/swiperContainer/ui/swiperContainer";
import TextType from "../../../shared/ui/textType/textType";
import styles from "./gallery.module.scss";

import logoRoomPhoto from "@shared/assets/images/logoped.jpg";
import sensorRoomPhoto from "@shared/assets/images/sensorInteg.jpg";
import receptionPhoto from "@shared/assets/images/reception.jpg";
const Gallery = () => {
    return (
        <section className={styles.gallery_section}>
            <div className="container">
                <div className={styles.title}>
                    <TextType variant={"h1"} color={"red"} align={"center"} weight={"semiBold"}>
                        Галерея
                    </TextType>
                </div>
                <SwiperContainer>
                    <SwiperSlide>
                        <div className={styles.slider}>
                            <img src={logoRoomPhoto} alt="logoped room"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slider}>
                            <img src={sensorRoomPhoto} alt="sensor room"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slider}>
                            <img src={receptionPhoto} alt="recepion"/>
                        </div>
                    </SwiperSlide>
                </SwiperContainer>
            </div>
        </section>
    );
};

export default Gallery;