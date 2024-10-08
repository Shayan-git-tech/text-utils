import React from 'react'
import logo from '../../logo.svg'

export default function Header() {
    return (
      <header>
        <img src={logo} alt="Logo" className='logo'/>
        <span className='headline'>Word Count</span>
      </header>
    );
  }