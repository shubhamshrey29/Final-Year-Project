
import City from '../model/city-schema.js';

export const getCities = async(request, response) => {
    try{
        const cities = await City.find({});

        response.status(200).json(cities);
    }catch(error){
        response.status(500).json({message: error.message});
    }

}

export const getCityById = async (request, response) =>{
    try{
        const id = request.params.id;
        const city = await City.findOne({ 'id': id })

        response.status(200).json(city);
    }catch(error){
        response.status(500).json({message: error.message})

    }
}