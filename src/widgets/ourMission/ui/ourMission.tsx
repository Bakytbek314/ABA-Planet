import TextType from "../../../shared/ui/textType/textType.tsx";
import styles from "./ourMission.module.scss";


const OurMission = () => {
    return (
        <section className={styles.our_mission_section}>
            <div className="container">
                <div className={styles.our_mission}>
                    <div className={styles.mission_card}>
                        <TextType variant={"h1"} weight={"semiBold"}>Наша миссия</TextType>
                        <TextType variant={"smallP"} color={"grey"}>
                            В основе нашей практики лежит глубокая приверженность расширению прав и возможностей детей и поддержке их семей
                        </TextType>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurMission;