import {FaInstagram, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt} from "react-icons/fa";
import TextType from "../../../shared/ui/textType/textType"
import styles from "./footer.module.scss";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className={styles.footer}>
                    <div className={styles.title}>
                        <TextType variant={"h3"} color={"blue"} weight={"semiBold"}>
                            ABA <span>ПЛАНЕТА</span>
                        </TextType>
                        <TextType variant={"mediumP"}>
                            Коррекционный центр развития особенных детей города Ош
                        </TextType>
                    </div>
                    <div className={styles.contacts}>
                        <TextType variant={"bigP"}>
                            Контакты:
                        </TextType>
                        <a href="tel:996500726660" target="_blank">
                            <TextType variant={"mediumP"} color={"black"}>
                                <FaPhoneAlt/> 0500726660
                            </TextType>
                        </a>
                        <a href="https://wa.me/996500726660" target="_blank">
                            <TextType variant={"mediumP"} color={"black"}>
                                <FaWhatsapp/> 0500726660
                            </TextType>
                        </a>
                        <a href="https://www.instagram.com/aba.planeta/" target="_blank">
                            <TextType variant={"mediumP"} color={"black"}>
                                <FaInstagram/> @aba_planeta
                            </TextType>
                        </a>
                        <a
                            href="https://2gis.kg/osh/geo/70030076201760673/72.811274%2C40.50988?m=72.81156%2C40.510012%2F20"
                            target="_blank"
                        >
                            <TextType variant={"mediumP"} color={"black"}>
                                <FaMapMarkerAlt/> Ленина 159
                            </TextType>
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;