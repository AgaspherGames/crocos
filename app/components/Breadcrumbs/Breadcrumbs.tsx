import Link from 'next/link';
import React from 'react';
interface BreadcrumbsProps {}

const Breadcrumbs: React.FC<BreadcrumbsProps> = () => {
  return ( <div className='breadcrumbs'>
        <Link href={'/'} >Главная</Link>
        <Link href={'/'} className='active' >Каталог услуг</Link>
  </div> );
}

export default Breadcrumbs;