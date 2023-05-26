import React from "react";
interface FlatButtonProps {}

interface FlatButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  color?: "green" | "blue" | "orange";
  outline?: boolean
}

const FlatButton: React.FC<FlatButtonProps> = ({
  color = "blue",
  outline = false,
  className,
  ...props
}) => {
  return (
    <button data-outline={outline} data-color={color} className={"o-btn " + className} {...props} />
  );
};

export default FlatButton;
