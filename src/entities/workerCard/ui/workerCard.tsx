import {WorkerCardProps} from "./workerCard.props.ts";
import TextType from "../../../shared/ui/textType/textType.tsx";
import Button from "../../../shared/ui/button/button.tsx";
import styles from "./workerCard.module.scss";

const WorkerCard = ( { name, photo, description, onModalOpen, education }: WorkerCardProps ) => {

    return (
        <div className={styles.worker_card}>
            <div className={styles.worker_photo}>
                <img className='tokenImage'
                     src={photo}
                     alt="photo"
                />
            </div>
            <div className={styles.worker_info}>
                <TextType variant={"h3"}>{name}</TextType>
                <TextType variant={"smallP"}>
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