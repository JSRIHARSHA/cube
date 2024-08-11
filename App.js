import React, { useState, useEffect } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import './App.css';

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("customers.json");
      const data = await response.json();
      setCustomers(data);
    };

    fetchData();
  }, []);

  const handleSelectCustomer = (customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className="app">
      <CustomerList
        customers={customers}
        onSelectCustomer={handleSelectCustomer}
        selectedCustomer={selectedCustomer}
      />
      <CustomerDetails customer={selectedCustomer} />
    </div>
  );
};

export default App;
