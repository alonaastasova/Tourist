import React from 'react'
import s from './Level1.module.css'
import line from '../../media/line.png'
import arrowRight from '../../media/arrowRight.png'
import photo1 from '../../media/photo1.png'

export default function Level1 () {
  return (
    <div className={s.main}>
        <div className={s.firstBlock}>
            <div className={s.text1}>
                <img src={line} alt="line" />
                <p>GET STARTED</p>
            </div>
            <h3>What level of hiker are you?</h3>
            <p>
                Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you - novice, moderate, advanced moderate, expert, or expert backpacker? 
            </p>
            <div className={s.text2}>
                <p>read more</p>
                <img src={arrowRight} alt="arrowRight" />
            </div>
        </div>
        <div className={s.secondBlock}>
            <img src={photo1} alt="photo1" />
        </div>
    </div>
  )
}
