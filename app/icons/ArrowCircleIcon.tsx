import React from "react";
interface ArrowCircleIconProps extends React.HTMLAttributes<HTMLOrSVGElement> {
}

const ArrowCircleIcon: React.FC<ArrowCircleIconProps> = ({...props }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.99999 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 9.99999C18.3333 5.39762 14.6024 1.66666 9.99999 1.66666C5.39762 1.66666 1.66666 5.39762 1.66666 9.99999C1.66666 14.6024 5.39762 18.3333 9.99999 18.3333Z"
        stroke="#00A2E4"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 13.3333L13.3333 9.99999L10 6.66666"
        stroke="#00A2E4"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66666 10H13.3333"
        stroke="#00A2E4"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowCircleIcon;
