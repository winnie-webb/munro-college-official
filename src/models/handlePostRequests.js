const parseVideo = require("./parseVideos");
const nanoid = require("nanoid").nanoid;
function handlePostRequests(app,ensureAuthForTeacher,formidable,Videos) {
    const {
        STUDENT__LOGIN__CODE,
        TEACHER__LOGIN__CODE,
        SESSION__NAME
    } = process.env
    
    
    app.post("/videos/all",ensureAuthForTeacher,(req,res) => {
        const form = new formidable.IncomingForm();
        parseVideo(form,Videos,req,res)
    })
    app.post("/login",(req,res) => {
        const{code,name} = req.body;
        if(code === TEACHER__LOGIN__CODE){
            req.session.teacherId = nanoid();
            req.session.username = name.split(" ")[0];
            res.redirect("/dashboard")
        } else if (code === STUDENT__LOGIN__CODE){
            req.session.studentId = nanoid();
            res.redirect("/videos")
        } else {
            res.redirect("/login")
        }
    })
    
    app.post("/logout", (req,res) => {
        req.session.destroy(err => {
            if(err) return res.redirect("/login");
        })
        res.clearCookie(SESSION__NAME);
        res.redirect("/");
    })
}

module.exports = handlePostRequests;