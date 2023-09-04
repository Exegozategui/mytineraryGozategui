import React from 'react';
import './styles.css'; 
import { Link } from 'react-router-dom'

const CityCard = ({ imagen,ciudad,pais,id }) => {
  return (
    
    <div className="city-card">
      <img src={imagen} alt={ciudad} />
      <div className="city-info">
        <h2 className="city-title">{ciudad}</h2>
        <p className="country-subtitle">{pais}</p>
        <Link to={`/details/${id}`} className='cardCity__btn'>View More</Link>
      </div>
    </div>
  );
};

export default CityCard;



