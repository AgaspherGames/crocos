import React, { Ref } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
interface ModalInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    inputRef?: Ref<HTMLInputElement>;
    register: UseFormRegisterReturn<any>;
    label: string;
}

const ModalInput: React.FC<ModalInputProps> = ({className, label, register, inputRef, ...props}) => {
  return ( <input {...register} {...props}  className={`modal-input ${className}`} /> );
}

export default ModalInput;