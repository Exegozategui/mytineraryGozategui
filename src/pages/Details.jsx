import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getCity } from '../services/servicesCities'
import DetailsCard from '../Components/DetailsCard'


function Details() {
  const { id } = useParams()
  
  const [city, setCity] = useState({})

  useEffect(() => {
    getCity(id)
    .then(data => setCity(data))
    .catch(err => console.log(err))
    
  }, [])
console.log(city)
  return (
    <>
      <DetailsCard data={city} />
      
       <div className='container'>
        <h2>There are not itineraries</h2>
        <small>
          <h3>Site under construction</h3>
          </small>
        <Link to="/Cities" className='return__btn'>Back to cities</Link>
        </div>
    </>
  )
}

export default Details

