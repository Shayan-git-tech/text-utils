import React from 'react';

export default function Alert(props) {
  // Dynamically change the alert class based on the mode (light or dark)
  const alertClass = props.mode === 'dark' ? 'alert-dark' : 'alert-light';
  const visibilityClass = props.alertVisible ? 'show' : 'hide'; // Add class for visibility

  return (
    props.alert && (
      <div className={`alert-box ${alertClass} ${visibilityClass}`}>
        <p>{props.alert}</p>
      </div>
    )
  );
}
