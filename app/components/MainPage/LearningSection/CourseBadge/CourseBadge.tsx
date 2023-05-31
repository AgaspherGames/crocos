import OnlineIcon from "@/app/icons/OnlineIcon";
import UserWhiteIcon from "@/app/icons/UserWhiteIcon";
import React from "react";
interface CourseBadgeProps {
  offline?: boolean;
}

const CourseBadge: React.FC<CourseBadgeProps> = ({ offline=false }) => {
  return (
    <div data-offline={offline?'true':'false'} className="course-badge">
      <p>{offline ? "Курсы с преподавателем" : "Онлайн курсы"}</p>
      {offline ? <UserWhiteIcon /> : <OnlineIcon />}
    </div>
  );
};

export default CourseBadge;
