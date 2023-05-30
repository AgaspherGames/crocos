import React from "react";
interface FacebookIconProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  rotate?: number;
  color?: string;
}

const FacebookIcon: React.FC<FacebookIconProps> = ({
  rotate = 0,
  color = "#00A2E4",
  className,
}) => {
  let styles = {};
  if (rotate) {
    styles = { ...styles, rotate: `${rotate}deg` };
  }
  return (
    <svg
      width="11"
      height="20"
      viewBox="0 0 11 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.12011 3.32003H11.0001V0.14003C10.0899 0.045377 9.17526 -0.00135428 8.26011 2.98641e-05C5.54011 2.98641e-05 3.68011 1.66003 3.68011 4.70003V7.32003H0.610107V10.88H3.68011V20H7.36011V10.88H10.4201L10.8801 7.32003H7.36011V5.05003C7.36011 4.00003 7.64011 3.32003 9.12011 3.32003Z"
        fill={color}
      />
    </svg>
  );
};

export default FacebookIcon;
