import React, { useState, useEffect } from 'react';
import './styles.css'; 
import { getAllCities } from '../../services/servicesCities'; // Importa la función desde tu servicio

const slidesPerView = 4;

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [citiesData, setCitiesData] = useState([]);
  const totalSlides = Math.ceil(citiesData.length / slidesPerView); // Agrega esto aquí

  useEffect(() => {
    // Llama a la función para obtener los datos de las ciudades desde tu servicio
    getAllCities()
      .then(data => {
        setCitiesData(data); 
        console.log(data)// Actualiza el estado con los datos de la API
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const changeSlide = (n) => {
    const newSlide = (currentSlide + n + totalSlides) % totalSlides;
    setCurrentSlide(newSlide);
  };

  return (
    <section className='background'>
      <div className="carousel-container">
        <h2>Popular Mytineraries</h2>
        <div className="carousel-slide">
          {citiesData.slice(currentSlide * slidesPerView, (currentSlide + 1) * slidesPerView).map(city => (
            <div key={city._id} className="city-slide">
              <img src={city.imagen} alt={city.ciudad} />
              <h3>{city.ciudad}</h3>
              <p className='carroup'>{city.pais}</p>
            </div>
          ))}
        </div>
        <div className="carousel-controls">
          <button onClick={() => changeSlide(-1)}>Anterior</button>
          <button onClick={() => changeSlide(1)}>Siguiente</button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
