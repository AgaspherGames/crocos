import React, { useState } from "react";

interface IOption {
  value: string;
  text: string;
}

interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  options: IOption[];
  value:IOption;
  setValue: Function;
}

const Select: React.FC<SelectProps> = ({ value, setValue, options, className, ...props }) => {
  const [selectOpened, setSelectOpened] = useState<boolean>(false);

  // const [value, setValue] = useState(options[0]);
  return (
    <div
      onClick={() => {
        setSelectOpened((prev) => !prev);
      }}
      className={className+" custom-select"}
      {...props}
    >
      <p className="value">{value.text}</p>
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
