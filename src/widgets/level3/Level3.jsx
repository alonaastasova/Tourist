import React from 'react'
import s from './Level3.module.css'
import line from '../../media/line.png'
import arrowRight from '../../media/arrowRight.png'
import photo3 from '../../media/photo3.png'

export default function Level3() {
  return (
    <div className={s.main}>
        <div className={s.firstBlock}>
            <div className={s.text1}>
                <img src={line} alt="line" />
                <p>WHERE YOU GO IS THE KEY</p>
            </div>
            <h3>Understand Your Map <span className={s.ampersand}>&</span> Timing</h3>
            <p>
                To start, print out the hiking guide and map. If it's raining, throw them in a Zip-lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I'll read the guide and know that say, in a mile, I make a right turn at the junction..
            </p>
            <div className={s.text2}>
                <p>read more</p>
                <img src={arrowRight} alt="arrowRight" />
            </div>
        </div>
        <div className={s.secondBlock}>
            <img src={photo3} alt="photo3" />
        </div>
    </div>
  )
}
