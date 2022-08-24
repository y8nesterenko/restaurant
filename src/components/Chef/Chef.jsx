import React from 'react';
import style from './Chef.module.scss';
import SubHeading from '../SubHeading/SubHeading';
import images from '../../constants/images';

const Chef = () => {
  return (
    <div className='app__bg wrapper sectionPadding'>
      <div className='wrapperImg wrapperImgReverse'>
        <img src={images.chef} alt='chef' />
      </div>
      <div className='wrapperInfo'>
        <SubHeading title="Chef's word" />
        <h1 className='headtext__cormorant'>What we believe in</h1>

        <div className={style.content}>
          <div className={style.quote}>
            <img src={images.quote} alt='quote_image' />
            <p className='p__opensans'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
              sit.
            </p>
          </div>
          <p className='p__opensans'>
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </p>
        </div>

        <div className={style.signature}>
          <p>Yurii Nesterenko</p>
          <p className='p__opensans'>Chef</p>
        </div>
      </div>
    </div>
  );
};

export default Chef;
