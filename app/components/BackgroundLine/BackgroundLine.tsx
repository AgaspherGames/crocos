import React from 'react';
interface BackgroundLineProps {
  bottom?: boolean
}

const BackgroundLine: React.FC<BackgroundLineProps> = ({
  bottom= false
}) => {
  return ( <div className={`background-line ${bottom ? 'bottom' :''}`}>
    <div className="line"></div>
        
  </div> );
}

export default BackgroundLine;