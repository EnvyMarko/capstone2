const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    completed: {
        type: String, //boolean
        default: true
    },
    author: {
        type: String,
        required: true
    }
    
}, {timestamps: true});

const Books = mongoose.model("books", bookSchema);
module.exports = Books;