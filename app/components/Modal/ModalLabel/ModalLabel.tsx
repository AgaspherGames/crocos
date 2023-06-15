import React from 'react';
interface ModalLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  error?: string
}

const ModalLabel: React.FC<ModalLabelProps> = ({className, error, children ,...props}) => {
  return ( <label {...props} className={`modal-label ${className}`}>{children} <span className='modal-label-error' >{error}</span> </label>);
}

export default ModalLabel;