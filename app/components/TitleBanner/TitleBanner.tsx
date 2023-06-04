import React from "react";
interface TitleBannerProps {
  text: string;
  subText?: string;
  imgUrl: string;
  type: "full" | "right" | "left";
}

const TitleBanner: React.FC<TitleBannerProps> = ({
  text,
  subText,
  imgUrl,
  type,
}) => {
  const [background, setBackground] = React.useState("");
  React.useEffect(() => {
    const backgroundRight =
      "linear-gradient(89.4deg, #00a2e4 1.55%, rgba(5, 0, 228, 0.78) 91.45%),";

    const backgroundLeft =
      "linear-gradient(90deg, rgba(25, 33, 228, 0.57) 0%, #0971E4 100%), ";

    let gradient = type == "right" ? backgroundRight : backgroundLeft;
    if (type == "full") gradient = "";
    setBackground(`${gradient} url("${imgUrl}")`);
  }, []);

  return (
    <div data-url={imgUrl} className="title-banner">
      <div
        style={{
          background: background,
          // border: '2px red solid'
        }}
        // style={{
        //   background: `${gradient} url("${imgUrl}");`,
        // }}
        data-type={type}
        className="bg-image"
      />
      <div className="content">
        <h2>{text}</h2>
        {subText && <p>{subText}</p>}
      </div>
    </div>
  );
};

export default TitleBanner;
