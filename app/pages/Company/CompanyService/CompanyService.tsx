import Button from '@/app/components/Button/Button';
import ArrowCircleIcon from '@/app/icons/ArrowCircleIcon';
import BagHappyIcon from '@/app/icons/BagHappyIcon';
import React from 'react';
interface CompanyServiceProps {}

const CompanyService: React.FC<CompanyServiceProps> = () => {
  return ( <div className='company-service'>
        <div className="category">
            <BagHappyIcon/>
            <p>Охрана коммерческих помещений</p>
        </div>
        <div className="price-div">
            <p className="price">
            от 5000 тг./ в месяц
            </p>
            <p className="info">ТРЦ, магазин, ресторан</p>
        </div>
        <Button withIcon >Заказать услугу <ArrowCircleIcon /> </Button>
  </div> );
}

export default CompanyService;