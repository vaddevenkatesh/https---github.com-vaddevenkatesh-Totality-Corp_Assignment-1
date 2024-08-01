import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ setFilters }) => {
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('');

  const applyFilters = () => {
    setFilters({ location, price, bedrooms });
  };

  return (
    <div className="filter-container">
      <h4>Filter Properties</h4>
      <div className="filter-group">
        <label>Location</label>
        <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
      </div>
      <div className="filter-group">
        <label>Price Range</label>
        <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
      </div>
      <div className="filter-group">
        <label>Bedrooms</label>
        <input type="number" value={bedrooms} onChange={e => setBedrooms(e.target.value)} />
      </div>
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filter;
