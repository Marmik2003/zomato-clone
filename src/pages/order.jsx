import React, { useState } from 'react'
import Header from '../components/Order/Header';
import FilterButtons from '../components/Order/FilterButtons';

import './order.scss'
import FoodCard from '../components/Order/FoodCard';

const OrderPage = () => {
  const [location, setLocation] = useState("Himatnagar");
  const [searchQuery, setQuery] = useState("");
  const [filters, setFilters] = useState({ rating: 0 });

  const onChangeFilters = (filters) => {
    setFilters(filters);
  };

  return (
    <div className="order-page">
      <Header
        functions={[location, setLocation]}
        setQuery={setQuery}
        searchQuery={searchQuery}
      />
      <FilterButtons filters={filters} onChangeFilters={onChangeFilters} />
      <h1 className="mx-44 pt-4 text-3xl font-normal header-title" >Best Food in {location}</h1>
      <FoodCard filters={filters} />
    </div>
  )
}

export default OrderPage