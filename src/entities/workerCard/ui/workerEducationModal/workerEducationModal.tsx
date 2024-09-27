import {useRef} from "react";
import {useClickOutSide} from "../../../../shared/lib/useClickOutSide.ts";
import {WorkerEducationModalProps} from "./workerEducationModal.props.ts"
import {IoIosCloseCircleOutline} from "react-icons/io";
import styles from "./workerEdicationModal.module.scss";

const WorkerEducationModal = ({workerEducationLicense, onModalClose}: WorkerEducationModalProps) => {

    const modalRef = useRef(null);
    useClickOutSide(modalRef, () => onModalClose());

    return (
        <section className={styles.worker_education_modal_popup}>
            <div className={styles.education_license} ref={modalRef}>
                <IoIosCloseCircleOutline onClick={onModalClose}/>
                <img src={workerEducationLicense} alt="worker"/>
            </div>
        </section>
    );
};

export default WorkerEducationModal;