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
      d="M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
    <path
      fill="#000"
      d="M5.808 8.225H4.123c-.472 0-.939.168-1.295.487a1.709 1.709 0 0 0-.578 1.271v4.034c0 .494.22.949.578 1.27.356.32.823.488 1.295.488h1.905l3.668 4.233c.194.299.483.518.809.637.35.128.738.14 1.095.032.359-.107.681-.331.895-.652.202-.3.29-.662.242-1.025v-3.845l-1.5-1.5v5.403a.75.75 0 0 0 .012.133.144.144 0 0 1-.079.05.245.245 0 0 1-.15-.005c-.046-.017-.063-.04-.067-.047a.755.755 0 0 0-.084-.118l-3.932-4.537a.75.75 0 0 0-.567-.259H4.123a.443.443 0 0 1-.293-.104c-.063-.056-.08-.114-.08-.154V9.983c0-.04.017-.098.08-.155a.443.443 0 0 1 .293-.103H6.37a.75.75 0 0 0 .567-.259l.052-.06-1.181-1.181ZM9.233 6.816 8.17 5.753l1.526-1.76c.194-.3.483-.519.809-.638.35-.128.738-.14 1.095-.032.359.107.681.331.895.652.202.3.29.662.242 1.025v5.32l-1.5-1.5V4.942a.75.75 0 0 1 .012-.133.143.143 0 0 0-.079-.05.245.245 0 0 0-.15.005c-.046.017-.063.04-.067.047a.75.75 0 0 1-.084.118L9.233 6.816ZM17.09 14.673l-1.13-1.13A4.25 4.25 0 0 0 14.55 8.6a.75.75 0 0 1 .9-1.2 5.75 5.75 0 0 1 1.64 7.273Z"
    />
    <path
      fill="#000"
      d="m20.022 17.604-1.08-1.08A8.26 8.26 0 0 0 20.293 12a8.25 8.25 0 0 0-3.064-6.417.75.75 0 1 1 .942-1.166 9.75 9.75 0 0 1 1.85 13.187Z"
    />
  </svg>
);
export default SvgComponent;