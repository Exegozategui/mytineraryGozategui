import React, { useState, useEffect } from 'react';
import { getAllCities } from '../../services/servicesCities';
import Search from '../Search';
import CityCard from '../CityCard';

function ComCities() {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getAllCities()
      .then(data => {
        setCities(data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleFormSubmit = (value) => {
    setSearchTerm(value.toLowerCase()); // Convertimos a minúsculas para una comparación sin distinción de mayúsculas y minúsculas
  };

  // Aplicamos el filtro basado en el término de búsqueda
  const filteredCities = cities.filter(city => city.ciudad.toLowerCase().startsWith(searchTerm.trim()));

  return (
    <div>
      <Search onSubmitProp={handleFormSubmit} />
      <div className='container'>
        {filteredCities.length > 0 ? (
          filteredCities.map((item) => (
            <CityCard key={item._id} ciudad={item.ciudad} pais={item.pais} imagen={item.imagen} id={item._id} />
          ))
        ) : (
          <h2 className='noResults'>No results found</h2>
        )}
      </div>
    </div>
  );
}

export default ComCities;




 