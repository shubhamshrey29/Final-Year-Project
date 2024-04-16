import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        trim: true,
        max:20
    },
    lastname:{
        type: String,
        required: true,
        trim: true,
        max:20
    },
    username:{
        type: String,
        required: true,
        trim: true,
        min:3,
        max:20,
        unique: true,
        index:true,
        lowercase: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    secondaryresult:{
        type: Number,
        required: true,
        trim: true,
        unique: false,
    },
    jeepercentile:{
        type: Number,
        required: true,
        trim: true,
        unique: false,
    },
    mhtcetresult:{
        type: Number,
        required: false,
        trim: true,
        unique: false,
    },
    statepreference:{
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        unique: false,
    },
});

const user = mongoose.model('user', userSchema);

export default user;
