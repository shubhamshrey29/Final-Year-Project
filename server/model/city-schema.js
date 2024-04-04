import mongoose from "mongoose";


const citySchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    url:String,
    title:String,
    detail:String,
});

const City = mongoose.model('cities', citySchema);

export default City;