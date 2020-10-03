const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname))
app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/index.html`)
})
app.get("/login.html",(req,res)=>{
    res.send("yooooo")
})
app.post("/login/result",(req,res)=>{
    const name = req.body.name;
    const code = req.body.code;
if(code === "MC-STD"){
    res.send(`Yo ${name}`)
}else if(code === "MC-TCH"){
res.send(`Yo ${name}`)
}else{
    res.send(`<a href="/login.html"> Code is incorrect try again</a>`);
}
});
app.listen(3000,()=>console.log("Server has started"));
