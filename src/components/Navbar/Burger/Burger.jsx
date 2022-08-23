import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import style from './Burger.module.scss';

const Burger = ({ links }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const link = links.map((item) => (
    <li key={item.toString()}>
      <a
        href={`#${item.toLocaleLowerCase()}`}
        onClick={() => setToggleMenu(false)}
      >
        {item}
      </a>
    </li>
  ));

  return (
    <div className={style.burger}>
      <GiHamburgerMenu
        color='#fff'
        fontSize={27}
        onClick={() => setToggleMenu(true)}
      />

      {toggleMenu && (
        <div className={style.body}>
          <MdOutlineRestaurantMenu
            fontSize={27}
            className={style.closeButton}
            onClick={() => setToggleMenu(false)}
          />
          <ul className={style.links}>{link}</ul>
        </div>
      )}
    </div>
  );
};

export default Burger;
