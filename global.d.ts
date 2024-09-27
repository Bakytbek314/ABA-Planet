declare module "*.module.css";
declare module "*.module.scss";

declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}

declare module "*.png" {
    const value: any;
    export default value;
}

declare module "*.jpg" {
    const value: string;
    export default value;
}

declare module "*.jpeg" {
    const value: string;
    export default value;
}

declare module '*.svg' {
    const content: any;
    export default content;
}