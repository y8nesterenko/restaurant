import React from 'react';
import style from './MenuItem.module.scss';

const MenuItem = ({ title, price, tags }) => (
  <div className={style.menuItem}>
    <div className={style.header}>
      <div className={style.name}>
        <p className='p__cormorant'>{title}</p>
      </div>
      <div className={style.dash} />
      <div className={style.price}>
        <p className='p__cormorant'>{price}</p>
      </div>
    </div>

    <div className={style.subtitle}>
      <p className='p__opensans'>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
