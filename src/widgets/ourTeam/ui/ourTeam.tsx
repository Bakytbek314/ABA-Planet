import {useState} from "react";
import WorkerCard from "../../../entities/workerCard/ui/workerCard.tsx";
import WorkerEducationModal from "../../../entities/workerCard/ui/workerEducationModal/workerEducationModal.tsx";
import TextType from "../../../shared/ui/textType/textType.tsx";
import {workerInfo} from "../../../shared/constants/workerInfo.ts";
import styles from "./ourTeam.module.scss";
import {useBlockedScroll} from "../../../shared/lib/useBlockedScroll";

const OurTeam = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [workerEducationLicense, setWorkerEducationLicense] = useState<string>("");

    const onModalOpen = ( photo: string ): void => {
        setIsModalOpen(!isModalOpen);
        setWorkerEducationLicense(photo);
    };

    const onModalClose = () => {
        setIsModalOpen(!isModalOpen);
    }

    useBlockedScroll(isModalOpen);

    return (
        <>
            <section className={styles.our_team_section}>
                <div className="container">
                    <div className={styles.our_team}>
                        <div>
                            <TextType variant={"h1"} align={"center"} weight={"semiBold"}>Наша команда</TextType>
                        </div>
                        <div className={styles.team_cards}>
                            {
                                workerInfo.map((worker) => (
                                    <WorkerCard
                                        id={worker.id}
                                        name={worker.name}
                                        photo={worker.photo}
                                        description={worker.description}
                                        education={worker.education}
                                        onModalOpen={onModalOpen}
                                        key={worker.id}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            {isModalOpen &&
                <WorkerEducationModal
                    workerEducationLicense={workerEducationLicense}
                    onModalClose={onModalClose}
                />
            }
        </>
    );
};

export default OurTeam;