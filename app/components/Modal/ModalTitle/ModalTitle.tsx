import React from 'react';
interface ModalTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
}

const ModalTitle: React.FC<ModalTitleProps> = ({className ,...props}) => {
  return ( <p {...props} className={`modal-title ${className}`}/>);
}

export default ModalTitle;