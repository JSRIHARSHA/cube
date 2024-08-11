// src/components/CustomerList.js
import React from 'react';
import CustomerCard from './CustomerCard';
import './CustomerList.css';
import customers from '../customers.json'

const CustomerList = ({ onSelectCustomer, selectedCustomer }) => {
  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          onClick={onSelectCustomer}
          isSelected={selectedCustomer && selectedCustomer.id === customer.id}
        />
      ))}
    </div>
  );
};

export default CustomerList;
