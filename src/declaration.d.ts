declare module "*.module.scss";

interface SvgrComponent
    extends React.FC<React.SVGAttributes<SVGElement>> {}

declare module "*.svg" {
    const ReactComponent: SvgrComponent;

    export { ReactComponent };
}