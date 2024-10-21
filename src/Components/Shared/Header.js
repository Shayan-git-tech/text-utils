import React from 'react';
import logo from '../../Logo.png';
import ThemeSwitcher from '../Home/ThemeSwitcher';

export default function Header(props) {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo" className='logo' />
      </div>
      <div className='switch-container'>
        <label className="switch">
          <input type="checkbox" onClick={props.toggleMode} />
          <span className="slider"></span>
        </label>
      </div>
      <ThemeSwitcher setTheme={props.setTheme} />
    </header>
  );
}
