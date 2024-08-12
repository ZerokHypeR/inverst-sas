import { Schema, model } from "mongoose";

const tasksSchma = new Schema({
    title: {
        type:String,
        Request: true,
        trim:true
    },
    description:{
        type:String,
        Request:true,
        trim:true

    },
    done:{
        type: Boolean,
        default:false
    }
})

export default model ("Tasks", tasksSchma);