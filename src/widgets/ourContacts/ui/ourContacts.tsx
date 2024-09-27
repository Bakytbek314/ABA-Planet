import LocationABAplanet from "../../../entities/locationABAplanet/ui/locationABAplanet";
import TextType from "../../../shared/ui/textType/textType";
import {FaInstagram, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt} from "react-icons/fa";
import styles from "./ourContacts.module.scss";

const OurContacts = () => {
    return (
        <section className={styles.our_contacts_section}>
            <div className="container">
                <div className={styles.our_contacts}>
                    <div>
                        <TextType variant={"h1"} weight={"semiBold"} color={"white"} align={"center"}>
                            Наши контакты
                        </TextType>
                    </div>
                    <div className={styles.contacts_location}>
                        <div className={styles.contacts}>
                            <div className={styles.phone_number}>
                                <TextType variant={"bigP"} color={"white"}>
                                    Телфон
                                </TextType>
                                <div className={styles.number}>
                                    <a href="tel:996500726660" target="_blank">
                                        <TextType variant={"bigP"} color={"white"}>
                                            <FaPhoneAlt/> 0500726660
                                        </TextType>
                                    </a>
                                </div>
                            </div>
                            <div className={styles.address}>
                                <TextType variant={"bigP"} color={"white"}>
                                    Адрес
                                </TextType>
                                <div className={styles.location}>
                                    <a
                                        href="https://2gis.kg/osh/geo/70030076201760673/72.811274%2C40.50988?m=72.81156%2C40.510012%2F20"
                                        target="_blank"
                                    >
                                        <TextType variant={"bigP"} color={"white"}>
                                            <FaMapMarkerAlt/> Ленина 159
                                        </TextType>
                                    </a>
                                </div>
                            </div>
                            <div className={styles.social_icons}>
                                <a href="https://www.instagram.com/aba.planeta/" target="_blank">
                                    <FaInstagram/>
                                </a>
                                <a href="https://wa.me/996500726660" target="_blank">
                                    <FaWhatsapp/>
                                </a>
                            </div>
                        </div>
                        <div className={styles.map}>
                            <LocationABAplanet/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurContacts;