
import { cities } from "../constants/data.js"
import City from "../model/city-schema.js";


const DefaultDatabse = () =>{
    try{
        City.insertMany(cities)

        console.log("Data imported successfully")
    }catch(error){
        console.log("Error while inserting default data", error.message);
    }
}

export default DefaultDatabse;