function initSession (app,session) {
  
    const {
        NODE__ENV,
        SESSION__SECRET,
        DATABASE__URI,
        SESSION__NAME
    } = process.env
    const MongoDBStore = require('connect-mongodb-session')(session);
 
    const store = new MongoDBStore({
      uri:DATABASE__URI,
      collection: 'mySessions'
    }); 
    store.on('error', error => {
        console.log(error);
      });
    const isInProduction = NODE__ENV === "production"
    
    app.use(session({
        name : SESSION__NAME,
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