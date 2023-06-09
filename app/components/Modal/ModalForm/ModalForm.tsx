import React from 'react';
interface ModalFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const ModalForm: React.FC<ModalFormProps> = ({ className, ...props }) => {
  return ( <div className={`modal-form ${className}`} {...props} />);
}

export default ModalForm;