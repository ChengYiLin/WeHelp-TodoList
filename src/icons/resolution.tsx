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
    <g
      fill="#000"
      fillRule="evenodd"
      clipPath="url(#prefix__a)"
      clipRule="evenodd"
    >
      <path d="M8.111 5c1.45 0 2.668.975 3.013 2.294h6.32v1.53h-6.32c-.345 1.319-1.563 2.294-3.013 2.294C6.393 11.118 5 9.748 5 8.058 5 6.37 6.393 5 8.111 5Zm0 4.588c.86 0 1.556-.685 1.556-1.53 0-.844-.697-1.529-1.556-1.529-.859 0-1.555.685-1.555 1.53 0 .844.696 1.53 1.555 1.53ZM15.889 18c-1.45 0-2.668-.975-3.013-2.294h-6.32v-1.53h6.32c.345-1.319 1.563-2.294 3.013-2.294 1.718 0 3.111 1.37 3.111 3.06C19 16.63 17.607 18 15.889 18Zm0-1.53c.859 0 1.555-.684 1.555-1.529 0-.845-.696-1.53-1.555-1.53-.86 0-1.556.686-1.556 1.53 0 .845.697 1.53 1.556 1.53Z" />
    </g>
    <defs>
      <clipPath id="prefix__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
