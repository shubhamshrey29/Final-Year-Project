
import { cities } from "../constants/data.js"
import City from "../model/city-schema.js";


// default.js
const DefaultData = async () => {
    try {
        
        await City.insertMany(cities);

        console.log("Data imported successfully");
    } catch (error) {
        console.log("Error while inserting default data", error.message);
    }
};

export default DefaultData;
