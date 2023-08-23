import React, { useState } from 'react';
import './styles.css'; 

function Search({ onSubmitProp }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSubmitProp(newSearchTerm); // Llamamos a la función de búsqueda mientras el usuario escribe
  };

  return (
  

<div className="page-container">
      <div className="form-container">
        <form>
          <input
            type="text"
            className="searchBar"
            placeholder="Search your city"
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
}

export default Search;


