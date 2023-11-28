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
      d="M20.647 5H3v13.5h17.647V5Zm-1.764 1.765H4.78v10h14.102v-10Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
