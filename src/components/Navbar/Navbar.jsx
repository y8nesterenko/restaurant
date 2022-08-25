import React from 'react';
import images from '../../constants/images';
import style from './Navbar.module.scss';
import Burger from './Burger/Burger';

const Navbar = () => {
  const links = ['Home', 'About', 'Menu', 'Awards', 'Contacts'];
  const link = links.map((item) => (
    <li key={item.toString()} className='p__opensans'>
      <a href={`#${item.toLocaleLowerCase()}`}>{item}</a>
    </li>
  ));

  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <img src={images.restaurant} alt='logo' />
      </div>

      <ul className={style.links}>{link}</ul>

      <div className={style.login}>
        <a href='#login' className='p__opensans'>
          Log In / Registration
        </a>
        <div className={style.separator} />
        <a href='/' className='p__opensans'>
          Book Table
        </a>
      </div>

      <Burger links={links} />
    </nav>
  );
};

export default Navbar;
