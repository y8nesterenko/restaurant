import React from 'react';
import style from './Menu.module.scss';
import SubHeading from '../SubHeading/SubHeading';
import MenuItem from './MenuItem/MenuItem';
import { data, images } from '../../constants';

const Menu = () => {
  const wines = data.wines.map((item, index) => (
    <MenuItem
      key={item.title + index}
      title={item.title}
      price={item.price}
      tags={item.tags}
    />
  ));

  const cocktails = data.cocktails.map((item, index) => (
    <MenuItem
      key={item.title + index}
      title={item.title}
      price={item.price}
      tags={item.tags}
    />
  ));

  return (
    <div className={style.menu + ' ' + 'flex__center sectionPadding'} id='menu'>
      <div className={style.title}>
        <SubHeading title='Menu that fits your palette' />
        <h1 className='headtext__cormorant'>Today&apos;s Special</h1>
      </div>

      <div className={style.positions}>
        <div className={style.drinks + ' ' + 'flex__center'}>
          <p>Wine & Beer</p>
          <div className={style.items}>{wines}</div>
        </div>

        <div className={style.photo}>
          <img src={images.menu} alt='menu' />
        </div>

        <div className={style.drinks + ' ' + 'flex__center'}>
          <p>Cocktails</p>
          <div className={style.items}>{cocktails}</div>
        </div>
      </div>

      <div className={style.viewMore}>
        <button type='button' className='button'>
          View More
        </button>
      </div>
    </div>
  );
};

export default Menu;
