function initSession (app,session) {
    const {
        NODE__ENV,
        SESSION__SECRET
    } = process.env
    
    const isInProduction = NODE__ENV === "production"
    
    app.use(session({
        secret : SESSION__SECRET,
        cookie : {
            maxAge : 1000 * 60 * 60 * 2,
            sameSite : true,
            secure : isInProduction
        },
        resave : false,
        saveUninitialized : false
    }))

}
module.exports = initSession;