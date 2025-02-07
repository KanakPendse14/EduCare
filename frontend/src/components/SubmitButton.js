import React from 'react';

function SubmitButton({ onClick }) {
  return (
    <button
      className="save-button"
      onClick={onClick} // Pass the onClick prop to the button
    >
      Submit
    </button>
  );
}

export default SubmitButton;