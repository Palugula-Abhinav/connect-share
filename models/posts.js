let mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/Blogs");

let postSchema = mongoose.Schema({
    postTitle: {
        type: String,
        required: true
    },
    postContent: {
        type: String,
        required: true
    },
    postDescription: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("post", postSchema);