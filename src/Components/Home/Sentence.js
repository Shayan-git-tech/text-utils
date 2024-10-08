import React, { useState } from 'react';

export default function Sentence(props) {
  const [text, setText] = useState('');

  // Handle text input changes
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Convert text to uppercase
  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  // Convert text to lowercase
  const handleLowercase = () => {
    setText(text.toLowerCase());
  };

  // Convert text to sentence case
  const handleSentencecase = () => {
    setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
  };

  // Convert text to title case
  const handleTitlecase = () => {
    setText(
      text
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')
    );
  };

  
  const wordscount = text.trim().split(/\s+/).filter((word) => word !== '').length;

  return (
    <div className="flex-box">
      <div className="upper-case">
        <h1>{props.heading}</h1>
        <textarea
          value={text}
          onChange={handleChange}
          rows="8"
          cols="100"
          placeholder="Enter text"
          className="textarea"
        />
        <div className="btn">
          <button type="submit" onClick={handleUppercase}>
            Convert to UpperCase
          </button>
          <button type="submit" onClick={handleLowercase}>
            Convert to LowerCase
          </button>
          <button type="submit" onClick={handleSentencecase}>
            Convert to SentenceCase
          </button>
          <button type="submit" onClick={handleTitlecase}>
            Convert to TitleCase
          </button>
          
        </div>
      </div>
      <div className="calculate-char">
        <h2>No. of Characters and Words</h2>
        <p>{text.length} Characters and {wordscount} Words</p>
        <h3>Amount of time it will take to read</h3>
        <p>{(wordscount / 238).toFixed(2)} Minutes</p>
        <h3>Your Text Summary</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
