import React from 'react';
import style from './FindUs.module.scss';
import SubHeading from '../SubHeading/SubHeading';
import images from '../../constants/images';

const FindUs = () => {
  return (
    <div className='app__bg wrapper sectionPadding' id='contact'>
      <div className='wrapperInfo'>
        <SubHeading title='Contacts' />
        <h1 className={style.findUs + ' ' + 'headtext__cormorant'}>Find Us</h1>
        <div className='wrapperContent'>
          <p className='p__opensans'>Kyiv, Khreschatyk</p>
          <p className={style.openingHours + ' ' + 'p__cormorant'}>
            Opening Hours
          </p>
          <p className='p__opensans'>Mon - Fri: 09:00 - 02:00</p>
          <p className='p__opensans'>Sat - Sun: 12:00 - 04:00</p>
        </div>
        <button type='button' className={style.visitUs + ' ' + 'button'}>
          Visit Us
        </button>
      </div>

      <div className='wrapperImg'>
        <img src={images.findus} alt='finus_img' />
      </div>
    </div>
  );
};

export default FindUs;
