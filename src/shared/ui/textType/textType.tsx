import {TextTypeProps} from "./textType.props.ts";
import classNames from "classnames";
import styles from "./textType.module.scss";

const TextType= ({
    variant,
    weight = "regular",
    className,
    color,
    children,
    align
                              }: TextTypeProps) => {

    const Tags = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        bigP: "p",
        mediumP: "p",
        smallP: "p",
    } as const;

    const classNamedGenerator = classNames(
        styles[variant],
        styles[weight],
        color && styles[color],
        align && styles[align],
        className,
    );

    const TagName = Tags[variant] || "p";

    return (
        <TagName className={classNamedGenerator}>
            {children}
        </TagName>
    );
}

export default TextType;