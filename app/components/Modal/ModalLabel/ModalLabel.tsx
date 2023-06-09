import React from 'react';
interface ModalLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
}

const ModalLabel: React.FC<ModalLabelProps> = ({className ,...props}) => {
  return ( <label {...props} className={`modal-label ${className}`}/>);
}

export default ModalLabel;