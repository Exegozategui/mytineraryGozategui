import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCity } from "../../services/servicesCities";
import { getItinerariesByCity } from "../../services/servicesItineraries";


export const get_cities = createAction('get_cities', (arr) => ({ payload: { cities: arr } }));
export const get_city = createAsyncThunk('get_city', async (id) => {
    try {
      const city = await getCity(id); // Obtén los detalles de la ciudad
  
      const itineraries = await getItinerariesByCity(id); // Obtén los itinerarios relacionados con la ciudad
      return { city, itineraries };
     
    } catch (error) {
      console.log(error.message);
    }
  });
