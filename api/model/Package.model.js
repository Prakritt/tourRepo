import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    country : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    duration : {
        type : Number,
        required : true
    },
    images : {
        type : [String],
        required : true
    },
    itenary : {
        type : [String],
        required : true
    },
    inclusions : {
        type : [String],
        required : true
    }
},{timestamps : true})

const Package = mongoose.model('Package',packageSchema);

export default Package;