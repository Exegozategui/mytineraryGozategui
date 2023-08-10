import React, { useState, useEffect } from 'react';
import './styles.css'; 
import citiesData from './cities.json'; // Importo el archivo JSON

const slidesPerView = 4; // Establesco la cantidad de diapositivas que se mostrarán en cada vista del carrusel.

const totalSlides = Math.ceil(citiesData.length / slidesPerView); // Calculo el número total de diapositivas en el carrusel

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0); 

  const changeSlide = (n) => {
    const newSlide = (currentSlide + n + totalSlides) % totalSlides; //Defino una función changeSlide que toma un argumento n. Esta función se utiliza para cambiar la diapositiva actual. La nueva diapositiva se calcula sumando n a la diapositiva actual y luego tomando el módulo del resultado con totalSlides para asegurarse de que se mantenga dentro del rango de diapositivas.
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const interval = setInterval(() => {  //Utilizo el efecto secundario useEffect para cambiar automáticamente la diapositiva cada 5 segundos.
      changeSlide(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className='backgroud'>
    <div className="carousel-container">
      <h2>Popular Mytineraries</h2>
      <div className="carousel-slide">
        {citiesData.slice(currentSlide * slidesPerView, (currentSlide + 1) * slidesPerView).map(city => (
          <div key={city.id} className="city-slide">
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
