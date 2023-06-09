import React from 'react';
interface ModalSubtitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
}

const ModalSubtitle: React.FC<ModalSubtitleProps> = ({className ,...props}) => {
  return ( <p {...props} className={`modal-subtitle ${className}`}/>);
}

export default ModalSubtitle;