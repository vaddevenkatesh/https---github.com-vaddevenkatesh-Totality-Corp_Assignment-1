import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from '../components/PropertyCard';
import Filter from '../components/Filter';
import './HomePage.css';

const HomePage = () => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({ location: '', price: '', bedrooms: '' });

  useEffect(() => {
    axios.get('/api/properties', { params: filters })
      .then(response => setProperties(response.data))
      .catch(error => console.error('Error fetching properties:', error));
  }, [filters]);

  return (
    <div className="home-page">
      <Filter setFilters={setFilters} />
      <div className="property-list">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
