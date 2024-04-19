import React from 'react'
import { NavLink } from "react-router-dom";
import logo from '../../media/Logo.png'
import accountIcon from '../../media/accountIcon.png'
import s from './Header.module.css'

export default function Header() {
  return (
    <div className={s.main}>
        <img src={logo} alt="logo" />
        <div className={s.links}>
            <NavLink to='/'>Equipment</NavLink>
            <NavLink to='/'>About us</NavLink>
            <NavLink to='/'>Blog</NavLink>
        </div>
        <div className={s.accountLink}>
            <img src={accountIcon} alt="accountIcon" />
            <p>Account</p>
        </div>
    </div>
  )
}
