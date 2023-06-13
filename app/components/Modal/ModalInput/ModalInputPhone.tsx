import React, { Ref } from "react";
import { UseFormRegister } from "react-hook-form";
import InputMask from 'react-input-mask';

interface ModalInputPhoneProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: Ref<HTMLInputElement>;
  register: UseFormRegister<any>;
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
    {
      ...{
        mask: '+7 (999) 999 99 99',
        maskChar: '_',
        alwaysShowMask: false,
        formatChars: {
          '9': '[0-9]',
          'a': '[A-Za-z]',
          '*': '[A-Za-z0-9]'
        },
        permanents: [2, 5] // permanents is an array of indexes of the non-editable characters in the mask
      }
    }
      {...props}
      {...register(label)}
      className={`modal-input ${className}`}
    />
  );
  // return ( <input {...props} ref={inputRef} className={`modal-input ${className}`} /> );
};

export default ModalInputPhone;
