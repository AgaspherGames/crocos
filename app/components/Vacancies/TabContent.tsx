import React from 'react';
import VacancyCard from './VacancyCard/VacancyCard';
interface TabContentProps extends React.HTMLAttributes<HTMLDivElement>  {}

const TabContent: React.FC<TabContentProps> = ({children}) => {
  return ( <div className='cards'>
        {children}
  </div> );
}

export default TabContent;