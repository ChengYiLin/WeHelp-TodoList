import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M15.001 4.64h4.363V9H21V3h-6l.001 1.64ZM4.64 8.999V4.636H9V3H3v6l1.64-.001ZM8.999 19.36H4.636V15H3v6h6l-.001-1.64ZM19.36 15.001v4.363H15V21h6v-6l-1.64.001Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
