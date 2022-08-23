import React from 'react';
import style from './Header.module.scss';
import SubHeading from '../SubHeading/SubHeading';
import images from '../../constants/images';

const Header = () => {
  return (
    <div className={style.header + ' ' + 'wrapper sectionPadding'} id='home'>
      <div className='wrapperInfo'>
        <SubHeading title='Chase the new flavour' />
        <h1>The Key To Fine Dining</h1>
        <p className='p__opensans' style={{ margin: '2rem 0' }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus{' '}
        </p>
        <button type='button' className='button'>
          Explore Menu
        </button>
      </div>

      <div className='wrapperImg'>
        <img src={images.welcome} alt='header_img' />
      </div>
    </div>
  );
};

export default Header;
