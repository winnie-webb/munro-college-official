function handleGetRequest(app,Videos,redirectToDashboard,ensureAuthForStudent,ensureAuthForTeacher) {
    app.get("/",(req,res)=>{
        res.render("index");
    });
    const arrayOfPages = ["covid","history","newsfeed","quiz","sports","vision-mission","worksheets","worksheets-form1","worksheets-form2","worksheets-form3","worksheets-form4","worksheets-form5"];
    arrayOfPages.forEach(page=>app.get(`/${page}`,(req,res)=>res.render(page)));
    
    app.get("/videos",ensureAuthForStudent,(req,res) => res.render("videos"));
    
    app.get("/dashboard",ensureAuthForTeacher,(req,res) =>{
        res.render("dashboard",{username : req.session.username});
    } )
    
    app.get("/login",redirectToDashboard,(req,res) => res.render("login"));
    
    app.get("/core-values",(req,res) => res.redirect("/"));
    
    app.get("/videos/all",ensureAuthForTeacher,(req,res) => {
       Videos.find()
       .then(vids => res.json(vids))
    })
    app.get('*',(req, res)=>{
        res.status(404).render('404');
       });
}
module.exports = handleGetRequest;