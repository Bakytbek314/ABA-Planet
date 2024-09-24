import {ReactNode} from "react";

export interface TextTypeProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "bigP" | "mediumP" | "smallP";
  weight?: "regular" | "medium" | "semiBold";
  className?: string;
  color?: "red" | "green" | "blue" | "white" | "grey" | "black";
  children?: ReactNode;
  align?: "left" | "center" | "right";
}