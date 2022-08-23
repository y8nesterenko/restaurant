import React from 'react';
import images from '../../constants/images';
import style from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <div
      className={style.aboutUs + ' ' + 'app__bg flex__center sectionPadding'}
      id='about'
    >
      <div className={style.overlay + ' ' + 'flex__center'}>
        <img src={images.NY} alt='G_overlay' />
      </div>

      <div className={style.content + ' ' + 'flex__center'}>
        <div className={style.leftColumn}>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt='about_spoon' className='spoon__img' />
          <p className='p__opensans'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button type='button' className='button'>
            Know More
          </button>
        </div>

        <div className={style.centerColumn + ' ' + 'flex__center'}>
          <img src={images.knife} alt='about_knife' />
        </div>

        <div className={style.rightColumn}>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt='about_spoon' className='spoon__img' />
          <p className='p__opensans'>
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <button type='button' className='button'>
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
