import React from 'react';
interface ButtonProps  extends React.ButtonHTMLAttributes<HTMLButtonElement>{
}

const Button: React.FC<ButtonProps> = ({...props}) => {
  return  <button className='c-btn' {...props} />
}

export default Button;