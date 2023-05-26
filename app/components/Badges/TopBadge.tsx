import React from "react";
interface TopBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "top" | "sale" | "new";
  className?: string;
}

const TopBadge: React.FC<TopBadgeProps> = ({ type, className, ...props }) => {
  return <div className={type + " badge " + className} {...props} />;
};

export default TopBadge;
