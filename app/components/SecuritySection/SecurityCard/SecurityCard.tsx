import React from 'react';
import Button from '../../Button/Button';
import TopBadge from '../../Badges/TopBadge';
import Rating from './Rating';
interface SecurityCardProps {}

const SecurityCard: React.FC<SecurityCardProps> = () => {
  return ( <div className='card'>
      <div className="card-header">
        <TopBadge type='top'>Топ 10</TopBadge>
        <Rating/>
      </div>
      <div className="price">
        {/* <Image width={60} height={}/> */}
      </div>
      <div className="info">

      </div>
      <Button>Посмотреть улсуги</Button>
      
  </div> );
}

export default SecurityCard;