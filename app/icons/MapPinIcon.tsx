import React from "react";
interface MapPinIconProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  rotate?: number;
  color?: string;
}

const MapPinIcon: React.FC<MapPinIconProps> = ({
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
      <path
        d="M16.6666 8.33317C16.6666 13.3332 9.99992 18.3332 9.99992 18.3332C9.99992 18.3332 3.33325 13.3332 3.33325 8.33317C3.33325 6.56506 4.03563 4.86937 5.28587 3.61913C6.53612 2.36888 8.23181 1.6665 9.99992 1.6665C11.768 1.6665 13.4637 2.36888 14.714 3.61913C15.9642 4.86937 16.6666 6.56506 16.6666 8.33317V8.33317Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 10.8335C11.3807 10.8335 12.5 9.71421 12.5 8.3335C12.5 6.95278 11.3807 5.8335 10 5.8335C8.61929 5.8335 7.5 6.95278 7.5 8.3335C7.5 9.71421 8.61929 10.8335 10 10.8335Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default MapPinIcon;
