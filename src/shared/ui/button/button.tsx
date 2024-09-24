import classNames from "classnames";
import {ButtonProps} from "./button.props.ts";
import TextType from "../textType/textType.tsx";
import styles from "./button.module.scss"
const Button = ({size, color, children, onClick, className}: ButtonProps ) => {

    const classNameGenerator = classNames(
        styles[size],
        styles[color],
        styles["btn"],
        className
    )

    return (
        <button className={classNameGenerator} onClick={onClick}>
            <TextType variant={"mediumP"}>
                {children}
            </TextType>
        </button>
    )
}

export default Button;