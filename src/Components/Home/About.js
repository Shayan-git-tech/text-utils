import React from 'react';
import {Link} from 'react-router-dom'
export default function About() {
  return (
    <section className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Text Utils</h1>
        <p className="about-description">
          Welcome to <strong>Text Utils</strong> – your go-to tool for quick and efficient text transformations! Whether you need to convert text to uppercase, lowercase, or perform other text modifications, Text Utils provides you with an intuitive and modern interface to get the job done fast.
        </p>
        <p className="about-details">
          With the ability to seamlessly toggle between dark and light modes, and an array of themes to choose from, we make sure that your user experience is both functional and visually appealing. Enjoy the simplicity and power of Text Utils, and make your text formatting tasks a breeze!
        </p>
        <ul className="about-features">
          <li>Convert text to UPPERCASE, lowercase, or capitalize it!</li>
          <li>Real-time updates with a sleek and modern interface.</li>
          <li>Switch between Light, Dark, and custom themes like Koopa Beach and Choco Mountain.</li>
          <li>Easy to use, accessible, and responsive on all devices.</li>
        </ul>
        <Link to="/" className="cta-button">Explore Text Utils Now</Link>
      </div>
    </section>
  );
}
