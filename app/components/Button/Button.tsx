import React from 'react';
interface ButtonProps  extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string,
  withIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({withIcon=false, className, ...props}) => {
  return  <button className={`c-btn ${className??''} ${withIcon?'with-icon':''}`} {...props} />
}

export default Button;