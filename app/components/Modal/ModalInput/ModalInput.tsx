import React, { Ref } from 'react';
interface ModalInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    inputRef?: Ref<HTMLInputElement>;
}

const ModalInput: React.FC<ModalInputProps> = ({className, inputRef, ...props}) => {
  return ( <input {...props} ref={inputRef} className={`modal-input ${className}`} /> );
}

export default ModalInput;