const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sushantsp14:EYK4aefXK1l0CbdG@cluster0.qmfrbty.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}