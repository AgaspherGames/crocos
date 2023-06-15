import React from "react";
interface StarIconProps extends React.HTMLAttributes<HTMLOrSVGElement> {}

const StarIcon: React.FC<StarIconProps> = ({ ...props }) => {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.99984 1.66663L12.5748 6.88329L18.3332 7.72496L14.1665 11.7833L15.1498 17.5166L9.99984 14.8083L4.84984 17.5166L5.83317 11.7833L1.6665 7.72496L7.42484 6.88329L9.99984 1.66663Z"
        stroke="#D5D5D5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StarIcon;
