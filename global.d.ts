declare module "*.module.css";
// declare module "*.module.scss";

declare module '*.module.scss' {
    const classes: { readonly [key: string]: string }
    export default classes
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
    const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default content;
}

declare module '*.webp' {
    const content: string;
    export default content;
}