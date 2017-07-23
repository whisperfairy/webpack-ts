declare module "react-hot-loader";

interface RequireImport {
    default: any;
}
declare module '*.scss' {
    const content: any;
    export default content;
}