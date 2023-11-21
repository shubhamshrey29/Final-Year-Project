import mongoose from "mongoose";


const citySchema = new mongoose.Schema({
    id:String,
    img:String,
    tiltle:String,
});

const City = mongoose.model('database', citySchema)

export default City;