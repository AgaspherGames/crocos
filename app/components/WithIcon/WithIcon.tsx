import React from 'react';
interface WithIconProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: React.ReactNode
}

const WithIcon: React.FC<WithIconProps> = ({icon, children}) => {
  return ( <div className='with-icon'>
        {icon}
        {children}
  </div> );
}

export default WithIcon;