function redirectToDashboard(req,res,next){
    const {studentId,teacherId} = req.session;
    if(teacherId) return res.redirect("/dashboard");
    if (studentId) return res.redirect("/videos");
    next()
}
function ensureAuthForTeacher(req,res,next) {
    const {teacherId} = req.session;
    if (teacherId) return next() ;
    res.redirect("/login");
}
function ensureAuthForStudent(req,res,next) {
    const {studentId,teacherId} = req.session;
    if (studentId  || teacherId) return next() ;
    res.redirect("/login");
}
module.exports = {
    redirectToDashboard : redirectToDashboard,
    ensureAuthForTeacher : ensureAuthForTeacher,
    ensureAuthForStudent : ensureAuthForStudent
}
