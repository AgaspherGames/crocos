import React from 'react';
interface ButtonProps  extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string
}

const Button: React.FC<ButtonProps> = ({className, ...props}) => {
  return  <button className={'c-btn '+className} {...props} />
}

export default Button;