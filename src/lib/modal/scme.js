import mongoose from "mongoose";

const dataStucture = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    password :{
        type : String,
        required : true,
    },
},{timestamps : true}
);

export const User = mongoose.models.users || mongoose.model('users',dataStucture)