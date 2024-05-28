let express = require("express")
let posts = require("./controllers/BlogPosts")
let app = express()
require("dotenv").config()

app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs");
app.use(express.static("public"))

app.listen(2000)
app.use("/", posts)