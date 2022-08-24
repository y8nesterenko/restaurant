import React from 'react';
import style from './Awards.module.scss';
import SubHeading from '../SubHeading/SubHeading';
import { images, data } from '../../constants';

const Awards = () => {
  const awards = data.awards.map((award) => (
    <AwardCard award={award} key={award.title} />
  ));

  return (
    <div className='app__bg wrapper sectionPadding' id='awards'>
      <div className='wrapperInfo'>
        <SubHeading title='Awards & recognition' />
        <h1 className='headtext__cormorant'>Our Awards</h1>
        <div className={style.awards}>{awards}</div>
      </div>

      <div className='wrapperImg'>
        <img src={images.awards} alt='awards' />
      </div>
    </div>
  );
};

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className={style.awardCard}>
    <img src={imgUrl} alt='awards' />
    <div className={style.content}>
      <p className='p__cormorant'>{title}</p>
      <p className='p__opensans'>{subtitle}</p>
    </div>
  </div>
);

export default Awards;
