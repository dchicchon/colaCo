import React from 'react';
import './style.css';

const Soda = function Soda({ soda, toggleUpdateModal }) {
  return (
    <div className="soda-item">
      <span>
        {soda.id}
      </span>
      <span>
        {soda.label}
      </span>
      <span>
        {soda.price}
      </span>
      <span>
        {soda.quantity}
      </span>
      <span><button onClick={() => toggleUpdateModal(soda)} type="button">&#9776;</button></span>
    </div>
  );
};

export default Soda;
