import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './styles.css';

function Search({ onSubmitProp }) {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

   
    onSubmitProp(newSearchTerm);

    
    if (newSearchTerm === '') {
      
      onSubmitProp('');
    }
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
