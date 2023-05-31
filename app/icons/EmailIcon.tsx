import React from "react";
interface EmailIconProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  rotate?: number;
  color?: string;
}

const EmailIcon: React.FC<EmailIconProps> = ({
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
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_56_565)">
        <path
          d="M10.0001 13.3332C11.841 13.3332 13.3334 11.8408 13.3334 9.99984C13.3334 8.15889 11.841 6.6665 10.0001 6.6665C8.15913 6.6665 6.66675 8.15889 6.66675 9.99984C6.66675 11.8408 8.15913 13.3332 10.0001 13.3332Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.3334 6.66648V10.8331C13.3334 11.4962 13.5968 12.1321 14.0657 12.6009C14.5345 13.0698 15.1704 13.3331 15.8334 13.3331C16.4965 13.3331 17.1324 13.0698 17.6012 12.6009C18.07 12.1321 18.3334 11.4962 18.3334 10.8331V9.99981C18.3333 8.119 17.6969 6.29354 16.5278 4.82025C15.3587 3.34696 13.7256 2.3125 11.894 1.88506C10.0624 1.45762 8.14003 1.66234 6.43955 2.46595C4.73906 3.26955 3.36042 4.62477 2.5278 6.31124C1.69519 7.99772 1.45756 9.91626 1.85356 11.7549C2.24956 13.5936 3.2559 15.2442 4.70895 16.4384C6.16199 17.6326 7.97628 18.3001 9.85681 18.3324C11.7373 18.3648 13.5735 17.76 15.0668 16.6165"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_56_565">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default EmailIcon;
