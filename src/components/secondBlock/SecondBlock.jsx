import React from 'react'
import s from './SecondBlock.module.css'
import Level1 from '../../widgets/level1/Level1'
import Level2 from '../../widgets/level2/Level2'
import Level3 from '../../widgets/level3/Level3'

export default function SecondBlock() {
  return (
    <div className={s.main}>
        <Level1 />
        <Level2 />
        <Level3 />
    </div>
  )
}
