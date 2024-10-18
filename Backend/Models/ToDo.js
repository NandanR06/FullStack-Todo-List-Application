import mongoose from "mongoose";

const structure = mongoose.Schema({
    text: {
        type: String,
        require: true
    }
})

const collection  = mongoose.model('ToDo',structure);

export default collection;
