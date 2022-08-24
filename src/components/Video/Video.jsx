import React, { useState, useRef } from 'react';
import style from './Video.module.scss';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { intro } from '../../constants/index';

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const video = useRef();

  return (
    <div className={style.video}>
      <video
        ref={video}
        src={intro}
        type='video/mp4'
        loop
        controls={false}
        muted
      />
      <div className={style.background + ' ' + 'flex__center'}>
        <div
          className={style.playButton + ' ' + 'flex__center'}
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              video.current.pause();
            } else {
              video.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color='#fff' fontSize={30} />
          ) : (
            <BsFillPlayFill color='#fff' fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;
