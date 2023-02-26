import React from 'react';
export const Feedback = ({ onIncrement }) => (
  <>
    <div className="Controls">
      <button type="button" onClick={onIncrement}>
        Good
      </button>
      <button type="button" onClick={onIncrement}>
        Neutral
      </button>
      <button type="button" onClick={onIncrement}>
        Bad
      </button>
    </div>
  </>
);
