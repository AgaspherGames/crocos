import React, { Ref } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import InputMask from "react-input-mask";

interface ModalInputPhoneProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: Ref<HTMLInputElement>;
  register: UseFormRegisterReturn<any>;
  label: string;
}

const ModalInputPhone: React.FC<ModalInputPhoneProps> = ({
  className,
  label,
  register,
  inputRef,
  ...props
}) => {
  return (
    <InputMask
      {...{
        mask: "+7 (999) 999 99 99",
        maskChar: "_",
        alwaysShowMask: false,
        formatChars: {
          "9": "[0-9]",
          a: "[A-Za-z]",
          "*": "[A-Za-z0-9]",
        },
        defaultValue: "+7 (___) ___ __ __",
        placeholder: "+7 (___) ___ __ __",
        permanents: [2, 5],
      }}
      {...register}
      {...props}
      className={`modal-input ${className}`}
    />
  );
};

export default ModalInputPhone;
