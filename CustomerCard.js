// src/components/CustomerCard.js
import React from 'react';
import './CustomerCard.css';

const CustomerCard = ({ customer, onClick, isSelected }) => {
  return (
    <div
      className={`customer-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(customer)}
    >
      <h3>{customer.name}</h3>
      <p>{customer.title}</p>
    </div>
  );
};

export default CustomerCard;
