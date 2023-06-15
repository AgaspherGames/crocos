import React from "react";
interface LikeIconProps extends React.HTMLAttributes<HTMLOrSVGElement> {}

const LikeIcon: React.FC<LikeIconProps> = ({ ...props }) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.5 5.5V11.5"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 3.44L7 5.5H9.915C10.0702 5.5 10.2234 5.53614 10.3622 5.60557C10.5011 5.675 10.6219 5.7758 10.715 5.9C10.8081 6.0242 10.8711 6.16837 10.8989 6.32111C10.9266 6.47386 10.9185 6.63096 10.875 6.78L9.71 10.78C9.64942 10.9877 9.5231 11.1702 9.35 11.3C9.1769 11.4298 8.96637 11.5 8.75 11.5H2C1.73478 11.5 1.48043 11.3946 1.29289 11.2071C1.10536 11.0196 1 10.7652 1 10.5V6.5C1 6.23478 1.10536 5.98043 1.29289 5.79289C1.48043 5.60536 1.73478 5.5 2 5.5H3.38C3.56604 5.4999 3.74837 5.44791 3.90648 5.34986C4.06459 5.25181 4.19221 5.11161 4.275 4.945L6 1.5C6.23579 1.50292 6.46787 1.55908 6.6789 1.6643C6.88994 1.76951 7.07446 1.92105 7.2187 2.1076C7.36294 2.29415 7.46316 2.51088 7.51187 2.7416C7.56058 2.97232 7.55652 3.21107 7.5 3.44V3.44Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LikeIcon;
