import {ButtonHTMLAttributes} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    size?: "small" | "medium" | "large";
    color?: "red" | "grey" | "green";
    href?: string;
    children: React.ReactNode;
}