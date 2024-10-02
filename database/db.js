import mongoose from "mongoose";

const DBConnection= async()=>{
    const DB_URL=`mongodb://Jamir:xQfLoUnq7bbd9Fxj@cluster0-shard-00-00.odobm.mongodb.net:27017,cluster0-shard-00-01.odobm.mongodb.net:27017,cluster0-shard-00-02.odobm.mongodb.net:27017/?ssl=true&replicaSet=atlas-ynltdi-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;

    
    try{
        await mongoose.connect(DB_URL, {useNewUrlParser: true})
        console.log("Database connected successfully")
    } catch(error){
        console.error('Error while connecting with database', error.message);
    }
}

export default DBConnection;