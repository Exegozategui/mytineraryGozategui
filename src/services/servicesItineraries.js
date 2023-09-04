import axios from 'axios'

const itineraries = axios.create({
    baseURL: 'http://localhost:3000'
})

export const getItinerariesByCity = async (id) => {
    try {
        const { data } = await itineraries(`/api/itineraries/${id}`)
        return data.itineraries
    } catch (error) {
        console.log("error",error);
        return []
    }
}