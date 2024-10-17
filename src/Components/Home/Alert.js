import React from 'react';

export default function Alert(props) {
  // Dynamically change the alert class based on the mode (light or dark)
  const alertClass = props.mode === 'dark' ? 'alert-dark' : 'alert-light';

  return (
    props.alert && (
      <div className={`alert-box ${alertClass}`}>
        <p>{props.alert}</p>
      </div>
    )
  );
}

