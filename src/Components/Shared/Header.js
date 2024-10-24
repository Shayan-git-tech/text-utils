import React from 'react';
import logo from '../../Logo.png';
import ThemeSwitcher from '../Home/ThemeSwitcher';
import {Link} from 'react-router-dom'

export default function Header(props) {
  return (
    <header>
      <div className="logo-container">
        <Link to ="/"><img src={logo} alt="Logo" className='logo' /></Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
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
