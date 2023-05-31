import React, { useState } from 'react';
import Select from '../Select/Select';
interface SelectLangProps {}

const SelectLang: React.FC<SelectLangProps> = () => {
  const [lang, setLang] = useState({value: 'rus', text: 'Рус'},);
  return <Select value={lang} setValue={setLang} className='lang-select' options={[
  {value: 'rus', text: 'Рус'},
  {value: 'kaz', text: 'Каз'},
  ]} />
}

export default SelectLang;