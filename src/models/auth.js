function redirectToDashboard(req,res,next){
    const {studentId,teacherId} = req.session;
    if(teacherId) return res.redirect("/dashboard");
    if (studentId) return res.redirect("/videos");
    next()
}
function redirectToLogin(req,res,next) {
    const {studentId,teacherId} = req.session;
    if (teacherId) return res.render("dashboard");
    if(studentId) return res.render("videos");
    res.redirect("/login");
}
module.exports = {
    redirectToDashboard : redirectToDashboard,
    redirectToLogin : redirectToLogin
}