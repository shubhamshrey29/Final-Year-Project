import mongoose from "mongoose";

export const Connection = async ( username, password) => {
    const URL =`mongodb+srv://${username}:${password}@cluster0.fziglo8.mongodb.net/home?retryWrites=true&w=majority`;

    console.log('MongoDB Connection String:', URL);
    try {
        await mongoose.connect(URL);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with database ', error.message);
    }
};

export default Connection;
