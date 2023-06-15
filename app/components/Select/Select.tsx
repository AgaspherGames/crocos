import ArrowIcon from "@/app/icons/ArrowIcon";
import React, { useState } from "react";

interface IOption {
  value: string;
  text: string;
}

interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  options: IOption[];
  value: IOption;
  setValue: Function;
  icon?: React.ReactNode;
  arrow?: boolean;
  outline?: boolean;
  color?: "dark-blue" | "orange";
}

const Select: React.FC<SelectProps> = ({
  arrow = false,
  icon,
  value,
  setValue,
  options,
  className,
  color = "dark-blue",
  outline = false,
  ...props
}) => {
  const [selectOpened, setSelectOpened] = useState<boolean>(false);

  return (
    <div
      data-color={color}
      onClick={() => {
        setSelectOpened((prev) => !prev);
      }}
      className={className + ` custom-select ${outline ? "outline" : ""}`}
      {...props}
    >
      <div className="text">
        <p className="value">
          {icon} {value.text}
        </p>
        {arrow && (
          <ArrowIcon
            className="arrow-icon "
            rotate={selectOpened ? 90 : 270}
          />
        )}
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`custom-select-options ${selectOpened ? "open" : "close"}`}
      >
        {options.map((el) => (
          <div
            key={el.value}
            onClick={(e) => setValue(el)}
            className={el.value == value.value ? "active" : ""}
          >
            {el.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
