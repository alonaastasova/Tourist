import React from 'react'
import s from './FirstBlock.module.css'
import instagramIcon from '../../media/instagramIcon.png'
import twitterIcon from '../../media/twitterIcon.png'
import line from '../../media/line.png'
import arrowDownward from '../../media/arrowDownward.png'
import slider from '../../media/slider.png'

export default function FirstBlock() {
  return (
    <div className={s.main}>
        <div className={s.firstBlock}>
          <p>Follow us</p>
          <img src={instagramIcon} alt="instagramIcon" />
          <img src={twitterIcon} alt="twitterIcon" />
        </div>
        <div className={s.secondBlock}>
          <div className={s.div1}>
            <img src={line} alt="line" />
            <p className={s.text1}>A HIKING GUIDE</p>
          </div>
          <div className={s.div2}>
            <p>Be Prepared For The Mountains And Beyond!</p>
            <div className={s.div3}>
              <p>scroll down</p>
              <img src={arrowDownward} alt="arrowDownward" />
            </div>
          </div>
        </div>
        <div className={s.thirdBlock}>
          <div className={s.text}>
            <p>Start</p>
            <p>01</p>
            <p>02</p>
            <p>03</p>
          </div>
          <img src={slider} alt="slider" />
        </div>
    </div>
  )
}
