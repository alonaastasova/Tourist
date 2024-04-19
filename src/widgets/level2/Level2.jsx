import React from 'react'
import s from './Level2.module.css'
import line from '../../media/line.png'
import arrowRight from '../../media/arrowRight.png'
import photo2 from '../../media/photo2.png'

export default function Level2() {
  return (
    <div className={s.main}>
        <div className={s.secondBlock}>
            <img src={photo2} alt="photo2" />
        </div>
        <div className={s.firstBlock}>
            <div className={s.text1}>
                <img src={line} alt="line" />
                <p>HIKING ESSENTIALS</p>
            </div>
            <h3>Picking the right Hiking Gear!</h3>
            <p>
                The nice thing about beginning hiking is that you don't really need any special gear, you can propably get away with things you already have. Let's start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe they get sweaty or wet. 
            </p>
            <div className={s.text2}>
                <p>read more</p>
                <img src={arrowRight} alt="arrowRight" />
            </div>
        </div>
    </div>
  )
}
