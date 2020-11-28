const path = require("path");
const express = require("express");
const session = require("express-session");
const nanoid = require("nanoid").nanoid;
require("dotenv").config();
const app = express();
const {redirectToDashboard,redirectToLogin} = require("./src/models/auth")
require("./src/models/session")(app,session)

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"public/views"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

const {
    STUDENT__LOGIN__CODE,
    TEACHER__LOGIN__CODE
} = process.env

app.get("/",(req,res)=>{
    res.render("index");
});
const arrayOfPages = ["covid","history","newsfeed","quiz","sports","vision-mission","worksheets","worksheets-form1","worksheets-form2","worksheets-form3","worksheets-form4","worksheets-form5"];
arrayOfPages.forEach(page=>app.get(`/${page}`,(req,res)=>res.render(page)));

app.get("/videos",redirectToLogin);

app.get("/dashboard",redirectToLogin);

app.get("/login",redirectToDashboard,(req,res) => res.render("login"));

app.get("/core-values",(req,res) => res.redirect("/history"));

app.post("/login",(req,res) => {
    const{code} = req.body;
    if(code === TEACHER__LOGIN__CODE){
        req.session.teacherId = nanoid();
        res.redirect("/dashboard")
    } else if (code === STUDENT__LOGIN__CODE){
        req.session.studentId = nanoid();
        res.redirect("/videos")
    } else {
        res.redirect("/login")
    }
})

app.get('*',(req, res)=>{
   res.status(404).render('404');
  });

app.listen(process.env.PORT || 3000);

// Todo 

// 1. Reformat css and images to match the current project layout 
    // Status : "Done"
// Implement proper login system
// Status : "Not Completed"