import React, { useRef } from 'react';
import style from './Gallery.module.scss';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import SubHeading from '../SubHeading/SubHeading';
import images from '../../constants/images';

const Gallery = () => {
  const pictures = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ].map((image, index) => (
    <div className={style.imagesCard + ' ' + 'flex__center'} key={index + 1}>
      <img src={image} alt='dishes' />
    </div>
  ));
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className={style.gallery + ' ' + 'flex__center'}>
      <div className={style.content}>
        <SubHeading title='Our Dishes' />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type='button' className='button'>
          View More
        </button>
      </div>
      <div className={style.images}>
        <div className={style.imagesContainer} ref={scrollRef}>
          {pictures}
        </div>
        <div className={style.imagesArrows}>
          <BsArrowLeftShort
            className={style.arrowIcon}
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className={style.arrowIcon}
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
