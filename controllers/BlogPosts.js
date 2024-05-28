let express = require("express")
let mongoose = require("mongoose")
let bcrypt = require("bcrypt")
let session = require("express-session")
let localStratery = require("passport-local");
let MongoStore = "connect-mongo"
let passport = require("passport")
let Router = express.Router()
let posts = require("../models/posts")

Router.get("/", (req, res) => {
    posts.find({}).then((data) => {
        res.render("home.ejs", { posts: data, pagetype: "home" })
    })
})

Router.get("/post/:id", (req, res) => {
    let id = req.params.id
    posts.find({ _id: new mongoose.Types.ObjectId(id) }).then((data) => {
        res.render("home.ejs", { pagetype: "post", postTitle: data[0].postTitle, postContent: data[0].postContent })
    })
})
module.exports = Router