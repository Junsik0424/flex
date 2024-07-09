/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

// 정적 애셋들 임포트 하는 법
// declare module "*.scss" {
//   const classes: { [key: string]: string };
//   export default classes;
// }
declare module "*.svg" {
  import React = require("react");

  export const ReactComponent: REact.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
