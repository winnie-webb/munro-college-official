function initSession (app,session) {
    const MongoDBStore = require('connect-mongodb-session')(session);
 
    const store = new MongoDBStore({
      uri: 'mongodb://127.0.0.1:27017/connect_mongodb_session_test',
      collection: 'mySessions'
    }); 
    store.on('error', error => {
        console.log(error);
      });
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
        store : store,
        resave : false,
        saveUninitialized : false
    }))

}
module.exports = initSession;