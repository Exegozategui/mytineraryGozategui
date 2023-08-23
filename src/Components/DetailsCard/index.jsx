import React from 'react'
import './styles.css'

function DetailsCard({ data }) {
  return (
    <div className='container'>
    <div className='containerDetailsPage'>
      <img className='img_detailsPage' src={data?.imagen} alt={data?.ciudad} />
      <div className='centerContentDetailsPage'>
        <div className='containerDetailsPage__text'>
          <h2>{data?.ciudad}</h2>
          <h3>{data?.pais}</h3>
        </div>
      </div>
    </div>
    </div>
  );
}

export default DetailsCard;
