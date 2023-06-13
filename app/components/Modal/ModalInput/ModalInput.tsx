import React, { Ref } from 'react';
import { UseFormRegister } from 'react-hook-form';
interface ModalInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    inputRef?: Ref<HTMLInputElement>;
    register: UseFormRegister<any>;
    label: string;
}

const ModalInput: React.FC<ModalInputProps> = ({className, label, register, inputRef, ...props}) => {
  return ( <input {...props} {...register(label)} className={`modal-input ${className}`} /> );
  // return ( <input {...props} ref={inputRef} className={`modal-input ${className}`} /> );
}

export default ModalInput;