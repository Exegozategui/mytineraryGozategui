import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCity } from '../services/servicesCities';
import { getItineraries } from '../store/action/itinerariesActions';
import DetailsCard from '../Components/DetailsCard';
import ItineraryCard from '../Components/CardItineraries';
import { getItinerariesByCity } from '../services/servicesItineraries'; // Importa la función de servicio

function Details() {
  const { id } = useParams();
  const [city, setCity] = useState({});
  const itineraries = useSelector((state) => state.itinerariesReducer.itineraries);
  const dispatch = useDispatch();

  useEffect(() => {
    getCity(id)
      .then((data) => setCity(data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    // Llama al servicio para obtener los itinerarios
    getItinerariesByCity(id)
      .then((itinerariesData) => {
        dispatch(getItineraries(itinerariesData)); // Actualiza el estado Redux con los itinerarios
      })
      .catch((err) => console.log(err));
  }, [id, dispatch]);

  console.log(city);

  return (
    <>
      <DetailsCard data={city} />
      <div className='container'>
        {itineraries.length > 0 ? (
          // Renderiza los itinerarios si existen
          itineraries.map((itinerary) => (
            <ItineraryCard key={itinerary.id} data={itinerary} />
          ))
        ) : (
          // Muestra un mensaje si no hay itinerarios
          <h2>There are no itineraries</h2>
        )}
        <small>
          <h3>Site under construction</h3>
        </small>
        <Link to='/Cities' className='return__btn'>
          Back to cities
        </Link>
      </div>
    </>
  );
}

export default Details;

