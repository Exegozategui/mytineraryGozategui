import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function Calltoaction() {
  return (
    <div className="callto">
      <div className="center">
        <Link to="/Cities" className='calltoaction-link'>
          <button className='calltoaction'>Visit our page Cities</button>
        </Link>
      </div>
    </div>
  );
}

export default Calltoaction;
