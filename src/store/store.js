import { configureStore } from "@reduxjs/toolkit"
import citiesReducer from "./reduce/citiesReducers"
import itinerariesReducer from "./reduce/itinerariesReducers"

export const store = configureStore({
  reducer: {
    citiesReducer,
    itinerariesReducer
  }
})