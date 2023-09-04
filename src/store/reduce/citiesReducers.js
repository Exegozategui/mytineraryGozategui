import { get_cities, get_city } from '../action/citiesActions';
import { createReducer } from "@reduxjs/toolkit";


const initialState = {
  cities: [],
  cityDetails: {}, // Nuevo estado para los detalles de la ciudad
  cityItineraries: [], // Nuevo estado para los itinerarios de la ciudad
};

const citiesReducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(get_cities, (state, action) => {
      return { ...state, cities: action.payload.cities };
    })
    .addCase(get_city.fulfilled, (state, action) => {
      const { city, itineraries } = action.payload;
      return {
        ...state,
        cityDetails: city,
        cityItineraries: itineraries,
      };
    });
});

export default citiesReducer;