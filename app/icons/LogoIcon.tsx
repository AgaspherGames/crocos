import React from "react";
interface LogoIconProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  rotate?: number;
  color?: string;
  textColor?: string; 
}

const LogoIcon: React.FC<LogoIconProps> = ({
  rotate = 0,
  color = "#00A2E4",
  textColor = "white",
  className,
}) => {
  let styles = {};
  if (rotate) {
    styles = { ...styles, rotate: `${rotate}deg` };
  }
  return (
    <svg
      width="103"
      height="29"
      viewBox="0 0 103 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M51.6069 20.9886H51.9339V17.652H49.3313V20.9886H49.6583V17.9456H51.6069V20.9886ZM54.8902 20.9886H55.2639L53.9893 17.652H53.5756L52.301 20.9886H52.6546L53.769 18.019L54.8902 20.9886ZM56.9857 17.9123C57.7731 17.9123 58.3803 18.5195 58.3803 19.3203C58.3803 20.1144 57.7731 20.7217 56.9857 20.7217C56.1848 20.7217 55.5909 20.1078 55.5909 19.3203C55.5909 18.5195 56.1848 17.9123 56.9857 17.9123ZM58.3603 20.9886H58.6873V17.652H58.3603V18.286C58.0734 17.8855 57.6063 17.5986 56.9656 17.5986C56.0047 17.5986 55.2639 18.3527 55.2639 19.3136C55.2639 20.2879 56.0047 21.0354 56.9656 21.0354C57.6063 21.0354 58.0868 20.7483 58.3603 20.3279V20.9886ZM61.837 17.9456V17.652H59.0543V17.9456H60.2822V20.9886H60.6092V17.9456H61.837ZM63.6255 22.1498H63.9525V21.0354C65.0068 21.0154 65.8076 20.2813 65.8076 19.3203C65.8076 18.366 65.0068 17.6186 63.9525 17.5986V16.4175H63.6255V17.5986C62.5711 17.6186 61.7702 18.366 61.7702 19.3136C61.7702 20.2678 62.5711 21.0154 63.6255 21.0354V22.1498ZM62.0972 19.3203C62.0972 18.5329 62.7512 17.9256 63.6255 17.9055V20.7284C62.7512 20.7084 62.0972 20.1011 62.0972 19.3203ZM65.4806 19.3136C65.4806 20.1011 64.8266 20.7084 63.9525 20.7284V17.9055C64.8266 17.9256 65.4806 18.5329 65.4806 19.3136ZM67.863 17.5986C66.8887 17.5986 66.1413 18.3527 66.1413 19.3136C66.1413 20.2879 66.8887 21.0354 67.863 21.0354C68.824 21.0354 69.5781 20.2879 69.5781 19.3136C69.5781 18.3527 68.824 17.5986 67.863 17.5986ZM67.863 17.9123C68.6572 17.9123 69.2511 18.5195 69.2511 19.3203C69.2511 20.1078 68.6572 20.7217 67.863 20.7217C67.0622 20.7217 66.4683 20.1078 66.4683 19.3203C66.4683 18.5195 67.0622 17.9123 67.863 17.9123ZM71.7135 17.9123C72.5143 17.9123 73.1082 18.5195 73.1082 19.3203C73.1082 20.1078 72.5143 20.7217 71.7135 20.7217C70.9261 20.7217 70.3188 20.1144 70.3188 19.3203C70.3188 18.5195 70.9261 17.9123 71.7135 17.9123ZM71.7336 21.0354C72.6945 21.0354 73.4352 20.2879 73.4352 19.3136C73.4352 18.3527 72.6945 17.5986 71.7336 17.5986C71.0929 17.5986 70.6124 17.8855 70.3388 18.3059V17.652H70.0118V22.1498H70.3388V20.3279C70.6124 20.7483 71.0929 21.0354 71.7336 21.0354ZM75.4104 20.9886H75.7775L77.0186 18.3394V20.9886H77.3456V17.652H76.992L75.604 20.6549L74.2026 17.652H73.8689V20.9886H74.1692V18.3394L75.4104 20.9886ZM79.5011 17.9123C80.2885 17.9123 80.8958 18.5195 80.8958 19.3203C80.8958 20.1144 80.2885 20.7217 79.5011 20.7217C78.7002 20.7217 78.1063 20.1078 78.1063 19.3203C78.1063 18.5195 78.7002 17.9123 79.5011 17.9123ZM80.8757 20.9886H81.2027V17.652H80.8757V18.286C80.5888 17.8855 80.1217 17.5986 79.4811 17.5986C78.5201 17.5986 77.7793 18.3527 77.7793 19.3136C77.7793 20.2879 78.5201 21.0354 79.4811 21.0354C80.1217 21.0354 80.6022 20.7483 80.8757 20.3279V20.9886ZM50.8929 28.2358C51.8338 28.2358 52.5612 27.515 52.5612 26.5808C52.5612 25.6399 51.8338 24.9258 50.9395 24.9258C50.2322 24.9258 49.7985 25.2661 49.5516 25.6599C49.625 24.4787 49.9853 24.0115 51.0331 23.9782L51.4735 23.9649C51.9006 23.9448 52.1808 23.9114 52.3744 23.838V23.5378C52.1675 23.5978 51.9006 23.6312 51.4668 23.6512L50.993 23.6712C49.5181 23.7246 49.2312 24.5988 49.2312 26.167V26.4339C49.2312 27.0679 49.3981 27.4216 49.6583 27.6952C49.972 28.0222 50.3924 28.2358 50.8929 28.2358ZM50.8996 25.2461C51.667 25.2461 52.2276 25.8267 52.2276 26.5874C52.2276 27.3348 51.667 27.9221 50.8996 27.9221C50.1321 27.9221 49.5649 27.3348 49.5649 26.5874C49.5649 25.8267 50.1321 25.2461 50.8996 25.2461ZM55.9178 27.228C55.6576 27.6552 55.2905 27.9154 54.6298 27.9154C53.9092 27.9154 53.2953 27.4483 53.2418 26.6342H56.2781C56.2781 26.6141 56.2781 26.5874 56.2848 26.5674C56.2848 26.5207 56.2915 26.4673 56.2915 26.4139C56.2915 25.5598 55.5975 24.7989 54.6031 24.7989C53.6288 24.7989 52.8948 25.5531 52.8948 26.514C52.8948 27.4883 53.6222 28.2358 54.6298 28.2358C55.3839 28.2358 55.8577 27.9088 56.1714 27.4016L55.9178 27.228ZM54.6031 25.1126C55.2971 25.1126 55.8777 25.5798 55.9511 26.3338H53.2418C53.3152 25.5864 53.9358 25.1126 54.6031 25.1126ZM57.6195 28.229C58.24 28.229 58.7072 27.862 58.7072 27.2481C58.7072 26.841 58.4936 26.5808 58.1666 26.4473C58.4803 26.2671 58.5938 25.9935 58.5938 25.7065C58.5938 25.1993 58.2 24.819 57.6128 24.819C57.1123 24.819 56.8186 25.0526 56.6318 25.3129L56.8521 25.4864C57.0056 25.2995 57.2057 25.1126 57.6128 25.1126C58.0332 25.1126 58.2735 25.3662 58.2735 25.7065C58.2735 26.0335 58.0465 26.3338 57.5995 26.3338H57.1991V26.6274H57.6328C58.14 26.6274 58.3869 26.881 58.3869 27.2548C58.3869 27.6818 58.0866 27.9354 57.6261 27.9354C57.2525 27.9354 56.9921 27.7886 56.7319 27.4216L56.4916 27.5951C56.792 28.0288 57.1456 28.229 57.6195 28.229ZM60.8093 24.7989C59.8349 24.7989 59.0875 25.5531 59.0875 26.514C59.0875 27.4883 59.8349 28.2358 60.8093 28.2358C61.7702 28.2358 62.5244 27.4883 62.5244 26.514C62.5244 25.5531 61.7702 24.7989 60.8093 24.7989ZM60.8093 25.1126C61.6035 25.1126 62.1974 25.7198 62.1974 26.5207C62.1974 27.3081 61.6035 27.9221 60.8093 27.9221C60.0084 27.9221 59.4145 27.3081 59.4145 26.5207C59.4145 25.7198 60.0084 25.1126 60.8093 25.1126ZM65.2337 28.189H65.5607V24.8524H62.9581V28.189H63.2851V25.146H65.2337V28.189ZM67.7161 25.1126C68.5036 25.1126 69.1108 25.7198 69.1108 26.5207C69.1108 27.3147 68.5036 27.9221 67.7161 27.9221C66.9153 27.9221 66.3214 27.3081 66.3214 26.5207C66.3214 25.7198 66.9153 25.1126 67.7161 25.1126ZM69.0908 28.189H69.4178V24.8524H69.0908V25.4864C68.8038 25.0859 68.3368 24.7989 67.6961 24.7989C66.7352 24.7989 65.9944 25.5531 65.9944 26.514C65.9944 27.4883 66.7352 28.2358 67.6961 28.2358C68.3368 28.2358 68.8173 27.9487 69.0908 27.5283V28.189ZM72.8144 27.228C72.5542 27.6552 72.1872 27.9154 71.5399 27.9154C70.739 27.9154 70.1785 27.3014 70.1785 26.514C70.1785 25.7266 70.7257 25.1193 71.5332 25.1193C72.1805 25.1193 72.5542 25.3863 72.8144 25.8134L73.068 25.6399C72.7678 25.1327 72.3073 24.7989 71.5332 24.7989C70.5455 24.7989 69.8515 25.5531 69.8515 26.5073C69.8515 27.4817 70.5455 28.2358 71.5332 28.2358C72.2739 28.2358 72.7543 27.9088 73.068 27.4016L72.8144 27.228ZM75.8107 28.189H76.1377V24.8524H75.8107V26.3538H73.7954V24.8524H73.4684V28.189H73.7954V26.6475H75.8107V28.189ZM78.2931 24.7989C77.3188 24.7989 76.5714 25.5531 76.5714 26.514C76.5714 27.4883 77.3188 28.2358 78.2931 28.2358C79.2541 28.2358 80.0082 27.4883 80.0082 26.514C80.0082 25.5531 79.2541 24.7989 78.2931 24.7989ZM78.2931 25.1126C79.0873 25.1126 79.6812 25.7198 79.6812 26.5207C79.6812 27.3081 79.0873 27.9221 78.2931 27.9221C77.4923 27.9221 76.8984 27.3081 76.8984 26.5207C76.8984 25.7198 77.4923 25.1126 78.2931 25.1126ZM83.3047 27.228C83.0445 27.6552 82.6775 27.9154 82.0302 27.9154C81.2293 27.9154 80.6688 27.3014 80.6688 26.514C80.6688 25.7266 81.216 25.1193 82.0235 25.1193C82.6707 25.1193 83.0445 25.3863 83.3047 25.8134L83.5583 25.6399C83.2581 25.1327 82.7976 24.7989 82.0235 24.7989C81.0358 24.7989 80.3418 25.5531 80.3418 26.5073C80.3418 27.4817 81.0358 28.2358 82.0235 28.2358C82.7642 28.2358 83.2446 27.9088 83.5583 27.4016L83.3047 27.228ZM86.4411 25.146V24.8524H83.6584V25.146H84.8863V28.189H85.2133V25.146H86.4411ZM87.1352 28.189L89.2173 25.3395V28.189H89.5443V24.8524H89.2173L87.1352 27.7018V24.8524H86.8082V28.189H87.1352Z"
        fill={textColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.2201 7.53653C35.3878 7.48195 40.7307 3.33193 41.1684 2.80005L33.0036 3.5527C31.3124 5.7619 31.731 6.53627 29.9072 7.21796C28.5296 7.73275 26.3613 8.70945 24.9955 8.97404C24.5219 8.2175 24.18 7.08365 23.7293 6.21184C22.7392 4.29642 19.3903 0.208429 18.2232 0C17.2923 0.158733 15.777 0.698176 15.153 1.1795L15.7908 1.73495C18.4048 3.58224 21.5553 7.13042 22.1587 10.0252C21.6812 10.3888 5.52361 16.4953 4.38647 16.7397C4.82446 17.8449 6.28284 18.9035 7.10667 19.8284C8.09521 20.9385 14.5445 27.7789 15.2493 28.159L12.5313 17.7086C14.8437 16.8214 21.3318 12.5929 22.9238 12.1934C23.7256 17.4444 23.4645 21.1126 20.691 25.6687C19.6203 27.4277 18.7756 28.0961 18.3334 28.8892C20.4346 27.9481 23.142 24.3012 24.2126 21.8497C26.0738 17.5881 25.8298 15.6301 25.4601 10.7781L25.9424 10.4138C26.1293 10.2935 26.265 10.2344 26.4313 10.1427C26.8185 9.92899 27.0828 9.78297 27.402 9.61324C32.1391 7.09281 29.7265 7.7463 34.2201 7.53653Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.81333 12.1822L2.91446 13.9046L0 7.62012C0.244815 7.6526 0.144201 7.61901 0.455928 7.72841L4.00153 9.82027C4.93049 10.3915 7.19109 11.5859 7.81333 12.1822Z"
        fill={color}
      />
      <path
        d="M52.2448 5.17456V0.034668H49.7473V11.0719H52.2448V6.36689L55.983 11.0719H59.2216L54.71 5.54516L59.0928 0.034668H56.1764L52.2448 5.17456ZM64.5711 11.2653C67.6165 11.2653 69.2922 9.42837 69.2922 6.68924V0.034668H66.7948V6.35077C66.7948 8.0265 65.9891 8.94497 64.555 8.94497C63.0888 8.94497 62.2831 8.0265 62.2831 6.35077V0.034668H59.7857V6.68924C59.7857 9.42837 61.4774 11.2653 64.5711 11.2653ZM75.1088 7.99428C77.703 7.99428 79.2659 6.18972 79.2659 3.93388C79.2659 1.79086 77.8481 0.034668 75.3345 0.034668H70.5812V11.0719H73.0786V7.99428H75.1088ZM74.9639 2.32263C76.124 2.32263 76.7523 2.98333 76.7523 3.99837C76.7523 5.01353 76.124 5.70632 75.0445 5.70632H73.0786V2.32263H74.9639ZM82.8429 11.0719V0.034668H80.3454V11.0719H82.8429ZM90.1743 11.0719V6.96312L94.1863 0.034668H91.5117L88.9497 4.67506L86.4039 0.034668H83.6487L87.6607 6.94699V11.0719H90.1743ZM98.9395 6.96312H96.0715L97.5056 2.64484L98.9395 6.96312ZM100.309 11.0719H103L99.1168 0.034668H96.0554L92.1561 11.0719H94.7181L95.3464 9.17062H99.6808L100.309 11.0719Z"
        fill={color}
      />
    </svg>
  );
};

export default LogoIcon;
