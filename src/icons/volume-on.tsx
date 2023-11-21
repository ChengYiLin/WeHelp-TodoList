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
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 8a5 5 0 0 1 0 8m2.7-11a9 9 0 0 1 0 14M6.37 15.025H4.123c-.298 0-.583-.106-.794-.295A.959.959 0 0 1 3 14.017V9.983c0-.267.118-.524.329-.713.21-.189.496-.295.794-.295H6.37l3.932-4.538a.87.87 0 0 1 .46-.377.995.995 0 0 1 .623-.019c.204.061.377.186.487.35.11.166.151.36.115.55v14.117a.738.738 0 0 1-.115.55.887.887 0 0 1-.486.35.995.995 0 0 1-.624-.018.87.87 0 0 1-.46-.377L6.37 15.025Z"
    />
  </svg>
);
export default SvgComponent;
