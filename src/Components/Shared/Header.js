import React, { useState, useEffect, useRef } from 'react';
import logo from '../../Logo.png';
import ThemeSwitcher from '../Home/ThemeSwitcher';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerRef = useRef(null);
  const offCanvasRef = useRef(null);

  // Toggle the off-canvas visibility
  const toggleOffCanvas = (event) => {
    setIsOpen((prev) => !prev);
    event.stopPropagation();
  };

  // Handle clicks outside the hamburger and off-canvas area
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close only if click happens outside both hamburger and off-canvas
      if (
        isOpen &&
        offCanvasRef.current &&
        !offCanvasRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header>
      <div className="logo-container">
        <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <div className="switch-container">
        <label className="switch">
          <input type="checkbox" onClick={props.toggleMode} />
          <span className="slider"></span>
        </label>
      </div>
      <div className="hamburger-menu" ref={hamburgerRef}>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleOffCanvas}>
          <svg viewBox="0 0 32 32">
            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </div>
      </div>
      {/* Off-canvas menu */}
      <div ref={offCanvasRef} className={`off-canvas ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <ThemeSwitcher setTheme={props.setTheme} />
      </div>
    </header>
  );
}
