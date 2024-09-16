import classNames from "classnames";
import {ButtonProps} from "./button.props.ts";
import TextType from "../textType/textType.tsx";
import styles from "./button.module.scss"
const Button = ({size, color, children}: ButtonProps ) => {

    const classNameGenerator = classNames(
        styles[size],
        styles[color],
        styles["btn"]
    )

    return (
        <button className={classNameGenerator}>
            <TextType variant={"mediumP"}>
                {children}
            </TextType>
        </button>
    )
}

export default Button;