
function connectToDB(mongoose) {
mongoose.connect(process.env.DATABASE__URI,{
    useCreateIndex:true,
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then ( () => console.log("Connected To DB"))
.catch(err => console.log(err));
}
module.exports = connectToDB;