import City from '../model/city-schema.js';

// Get all cities
export const getCities = async (request, response) => {
    try {
        const cities = await City.find({});
        response.status(200).json(cities);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

// Get city by ID
export const getCityById = async (request, response) => {
    try {
        const id = request.params.id;
        const city = await City.findOne({ id: id });
        if (city) {
            response.status(200).json(city);
        } else {
            response.status(404).json({ message: "City not found" });
        }
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

// Get cities by city name
export const getCitiesByCityName = async (request, response) => {
    try {
        const cityName = request.params.city;
        console.log("Searching for city:", cityName);
        const cities = await City.find({ city: cityName });
        console.log("Found cities:", cities);
        if (cities.length > 0) {
            response.status(200).json(cities);
        } else {
            console.log("City not found:", cityName);
            response.status(404).json({ message: "City not found" });
        }
    } catch (error) {
        console.error("Error fetching cities:", error);
        response.status(500).json({ message: error.message });
    }
};
