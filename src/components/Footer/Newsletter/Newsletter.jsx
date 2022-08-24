import React from 'react';
import SubHeading from '../../SubHeading/SubHeading';
import style from './Newsletter.module.scss';

const Newsletter = () => (
  <div className={style.wrapper}>
    <div className={style.newsletter}>
      <div className={style.heading}>
        <SubHeading title='Newsletter' />
        <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
        <p className='p__opensans'>And never miss latest Updates!</p>
      </div>
      <div className={style.input + ' ' + 'flex__center'}>
        <input type='email' placeholder='Enter your email address' />
        <button type='button' className='button'>
          Subscribe
        </button>
      </div>
    </div>
  </div>
);

export default Newsletter;
