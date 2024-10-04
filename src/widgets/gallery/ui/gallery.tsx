import {SwiperSlide} from "swiper/react";
import SwiperContainer from "../../../features/swiperContainer/ui/swiperContainer";
import TextType from "../../../shared/ui/textType/textType";
import styles from "./gallery.module.scss";
import {interiorPhotos} from "../../../shared/constants/interiorPhotos.ts";
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
                    {interiorPhotos.map((photo: string) => (
                        <SwiperSlide>
                            <div className={styles.slider}>
                                <img src={photo} alt="room"/>
                            </div>
                        </SwiperSlide>
                    ))}
                </SwiperContainer>
            </div>
        </section>
    );
};

export default Gallery;