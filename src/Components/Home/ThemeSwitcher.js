import React from 'react';

export default function ThemeSwitcher({ setTheme }) {
  return (
    <div className="theme-switcher">
      <div className="theme-option" onClick={() => setTheme('koopaBeach')}>
        <p>Koopa Beach</p>
        <div className="theme-colors">
          <span style={{ backgroundColor: '#f6d365' }}></span>
          <span style={{ backgroundColor: '#005f73' }}></span>
          <span style={{ backgroundColor: '#ffbc42' }}></span>
        </div>
      </div>
      <div className="theme-option" onClick={() => setTheme('chocoMountain')}>
        <p>Choco Mountain</p>
        <div className="theme-colors">
          <span style={{ backgroundColor: '#4a2c2a' }}></span>
          <span style={{ backgroundColor: '#7b5438' }}></span>
          <span style={{ backgroundColor: '#f0d8d0' }}></span>
        </div>
      </div>
    </div>
  );
}
