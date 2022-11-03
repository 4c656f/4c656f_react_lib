declare module "*.module.scss";
declare module "*.module.css";
interface SvgrComponent
    extends React.FC<React.SVGAttributes<SVGElement>> {}

declare module "*.svg" {
    const ReactComponent: SvgrComponent;

    export { ReactComponent };
}
declare module '*.svg?inline' {
    const ReactComponent: SvgrComponent;

    export { ReactComponent };
}