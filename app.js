const path = require("path");
const fs = require("fs");
const express = require("express");
const session = require("express-session");
const formidable = require("formidable");
const mongoose = require("mongoose");
const Videos = require("./src/models/Videos")(mongoose);
require("dotenv").config();
require("./src/models/mongoose")(mongoose);
const app = express();
const {redirectToDashboard,ensureAuthForStudent,ensureAuthForTeacher} = require("./src/models/auth")
require("./src/models/session")(app,session)

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"public/views"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

require("./src/models/handleGetRequests")(app,Videos,redirectToDashboard,ensureAuthForStudent,ensureAuthForTeacher);
require("./src/models/handlePostRequests")(app,ensureAuthForTeacher,formidable,Videos);


app.listen(process.env.PORT || 3000);

// Todo 

// 1. Fix heroku memory leaks problem 