import React from 'react';
import style from './Footer.module.scss';
import Newsletter from './Newsletter/Newsletter';
import images from '../../constants/images';
import { FiFacebook, FiLinkedin, FiMeh } from 'react-icons/fi';

const Footer = () => (
  <div className={style.footer + ' ' + 'app__bg sectionPadding'} id='login'>
    <Newsletter />

    <div className={style.links}>
      <div className={style.contacts}>
        <h1 className={style.headtext}>Contact Us</h1>
        <p className='p__opensans'>Ukraine, Kyiv</p>
        <p className='p__opensans'>+38 099-655-88-65</p>
        <p className='p__opensans'>+38 068-655-88-65</p>
      </div>

      <div className={style.logo}>
        <h1 className={style.headtext}>NY Restaurant</h1>
        <p className='p__opensans'>
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img
          src={images.spoon}
          className='spoon__img'
          style={{ marginTop: 15 }}
        />
        <div className={style.icons}>
          <a
            href='https://www.facebook.com/profile.php?id=1648141964'
            target='_blank'
          >
            <FiFacebook />
          </a>
          <a href='https://linkedin.com' target='_blank'>
            <FiLinkedin />
          </a>
          <a href='http://test.inf.ua' target='_blank'>
            <FiMeh />
          </a>
        </div>
      </div>

      <div className={style.workingHours}>
        <h1 className={style.headtext}>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans'>09:00 - 02:00</p>
        <p className='p__opensans'>Saturday-Sunday:</p>
        <p className='p__opensans'>12:00 - 04:00 </p>
      </div>
    </div>

    <div className={style.copyright}>
      <p className='p__opensans'>2022 NY Restaurant. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
