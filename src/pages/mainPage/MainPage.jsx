import React from 'react'
import Header from '../../components/header/Header'
import FirstBlock from '../../components/firstBlock/FirstBlock'
import s from './MainPage.module.css'
import SecondBlock from '../../components/secondBlock/SecondBlock'

export default function MainPage() {
  return (
    <div className={s.main}>
        <Header />
        <FirstBlock />
        <SecondBlock />
    </div>
  )
}
