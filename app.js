const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname))

const arrayOfPages = ["covid.ejs","history.ejs","login.ejs","newsfeed.ejs","quiz.ejs","sports.ejs","core-values.ejs","vision-mission.ejs","worksheets.ejs","worksheets-form1.ejs","worksheets-form2.ejs","worksheets-form3.ejs","worksheets-form4.ejs","worksheets-form5.ejs"];
arrayOfPages.forEach(page=>app.get(`/${page}/`,(req,res)=>res.render(page)));

app.get("/",(req,res)=>{
    res.render("index");
});

app.post("/videos",(req,res)=>{
    const name = req.body.name;
    const code = req.body.code;
code === "MC-STU" ? res.render("videos")
:code === "MC-TCH" ? res.render("dashboard")
:res.send(`<a href="/login.ejs"> Code you entered is not valid. Please try again</a>`);
});


app.get('*',(req, res)=>{
    if(res.status(404))res.send(`<h1 style="text-align:center">Page Not Found</h1>`);
  });

app.listen(3000,"127.0.0.1",()=>console.log("Server has started"));