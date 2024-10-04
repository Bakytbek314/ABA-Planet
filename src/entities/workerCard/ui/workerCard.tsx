import {SyntheticEvent, useState} from "react";
import classNames from "classnames";
import {WorkerCardProps} from "./workerCard.props.ts";
import TextType from "../../../shared/ui/textType/textType.tsx";
import Button from "../../../shared/ui/button/button.tsx";
import AltPhoto from "../../../shared/assets/images/circles.png";
import styles from "./workerCard.module.scss";

const WorkerCard = ( { name, photo, description, onModalOpen, education, id }: WorkerCardProps ) => {

    const [ expandedCard, setExpandedCard ] = useState<number | null>(null);

    const onShortText = (id: number) => {
        setExpandedCard(prevId => prevId === id ? null : id);
    }

    return (
        <div className={classNames(styles.worker_card, expandedCard !== id && styles.expanded_card)}>
            <div className={styles.worker_photo}>
                <img
                     src={photo ? photo : AltPhoto as string}
                     alt="photo"
                />
            </div>
            <div className={styles.worker_info} onClick={() => onShortText(id)}>
                <TextType variant={"h3"}>{name}</TextType>
                <TextType variant={"smallP"} >
                    {description}
                </TextType>
            </div>
            <hr/>
            <div className={styles.education}>
                <Button size={"full"} onClick={() => onModalOpen(education)}>Образование</Button>
            </div>
        </div>
    );
};

export default WorkerCard;