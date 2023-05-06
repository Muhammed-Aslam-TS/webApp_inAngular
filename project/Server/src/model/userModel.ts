import mongoose, { Schema } from "mongoose";



const userSchema = new Schema({
    firstName: {
        type:String,
        required : true
    },
    lastName: {
        type:String,
        required : true
    },
    Email: {
        type:String,
        required : true
    },
    Password: {
        type:String,
        required : true
    },
    Phone: {
        type:Number,
        required : true
    },
    Image: {
        type:String,
        required : false
    },
});

 export default mongoose.model('users',userSchema);