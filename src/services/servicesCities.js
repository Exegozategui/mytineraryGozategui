import axios from "axios";

const cities = axios.create({
   baseURL:'http://localhost:3000'
})

export const getAllCities = async (queryParams = "") => {
    try {
        const { data } = await cities(`/api/cities${queryParams}`)
        return data.cities
    } catch (error) {
        return []
    }
}

export const getCity = async (id) => {
    try {
        const { data } = await cities("/api/city/" + id) 
        return data.city
    } catch (error) {
        return []
    }
}
