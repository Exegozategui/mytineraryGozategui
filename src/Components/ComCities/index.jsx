import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCities } from '../../services/servicesCities';
import Search from '../Search';
import CityCard from '../CityCard';
import { get_cities } from '../../store/action/citiesActions';

function ComCities() {
  const allCities = useSelector((state) => state.citiesReducer.cities);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    getAllCities()
      .then(data => {
        dispatch(get_cities(data));
      })
      .catch(err => console.log(err));
  }, [dispatch]);

  useEffect(() => {
    // Filtrar ciudades cuando searchTerm cambia
    const lowercaseSearchTerm = searchTerm.toLowerCase().trim();
    const filteredCities = allCities.filter(city =>
      city.ciudad.toLowerCase().startsWith(lowercaseSearchTerm)
    );
    setFilteredCities(filteredCities);
  }, [allCities, searchTerm]);

  const handleFormSubmit = (value) => {
    setSearchTerm(value);
  };

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

