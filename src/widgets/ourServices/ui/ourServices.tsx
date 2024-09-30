import {useState} from "react";
import {motion} from "framer-motion";
import TextType from "../../../shared/ui/textType/textType";
import Button from "../../../shared/ui/button/button";
import {servicesInfo} from "../../../shared/constants/servicesInfo";
import { IoChevronDownSharp } from "react-icons/io5";
import styles from "./ourServices.module.scss";

const OurServices = () => {

    const [openedServiceIndex, setOpenedServiceIndex] = useState<number | null>(null);

    const onServicesOpen = (index: number) => {
        setOpenedServiceIndex(prevIndex => (prevIndex === index ? null : index));
    }

    return (
        <section className={styles.our_services_section}>
            <div className="container">
                <div className={styles.our_services}>
                    <div>
                        <TextType
                            variant={"h1"}
                            weight={"semiBold"}
                            color={"white"}
                            align={"center"}
                        >
                            Наши услуги
                        </TextType>
                    </div>
                    <div className={styles.services_info_buttons}>
                        {servicesInfo.map((service) => (
                            <div key={service.id}>
                                <Button
                                    size={"full"}
                                    color={"grey"}
                                    onClick={() => onServicesOpen(service.id)}
                                    className={openedServiceIndex === service.id && styles.active_btn}
                                >
                                    <TextType
                                        variant={"bigP"}
                                        align={"left"}
                                    >
                                        {service.service}
                                    </TextType>
                                    <span>{service.price}</span>
                                    <IoChevronDownSharp
                                        className={openedServiceIndex === service.id
                                            ? styles.arrow_icon_open
                                            : styles.arrow_icon_close}
                                    />
                                </Button>
                                {
                                    openedServiceIndex === service.id && (
                                        <motion.div
                                            className={styles.services_info}
                                            variants={{
                                                open: {
                                                    clipPath: "inset(0% 0% 0% 0%)",
                                                    transition: {
                                                        type: "spring",
                                                        bounce: 0,
                                                        duration: 0.9,
                                                        delayChildren: 0.5,
                                                        staggerChildren: 0.05,
                                                    },
                                                },
                                                closed: {
                                                    clipPath: "inset(50% 50% 50% 50%)",
                                                    transition: {
                                                        type: "spring",
                                                        bounce: 0,
                                                        duration: 0.3,
                                                    },
                                                },
                                            }}
                                >
                                <TextType variant={"mediumP"}>
                                    {service.description}
                                </TextType>
                            </motion.div>
                        )
                        }
                    </div>
                    ))}
                </div>
            </div>
        </div>
</section>
)
    ;
};

export default OurServices;