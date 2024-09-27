import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { useClickOutSide } from "../../../../shared/lib/useClickOutSide.ts";
import { IoIosCloseCircleOutline } from "react-icons/io";
import styles from "./workerEdicationModal.module.scss";
const WorkerEducationModal = ({ workerEducationLicense, onModalClose }) => {
    const modalRef = useRef(null);
    useClickOutSide(modalRef, () => onModalClose());
    return (_jsx("section", { className: styles.worker_education_modal_popup, children: _jsxs("div", { className: styles.education_license, ref: modalRef, children: [_jsx(IoIosCloseCircleOutline, { onClick: onModalClose }), _jsx("img", { src: workerEducationLicense, alt: "worker" })] }) }));
};
export default WorkerEducationModal;
