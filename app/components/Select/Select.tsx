import React from 'react';
interface SelectProps {}

const Select: React.FC<SelectProps> = () => {
  return ( <select className='select'>
      <option value='rus' >Рус</option>
      <option value='kaz' >Каз</option>
  </select> );
}

export default Select;