const mongoose = require("mongoose");
const Videos = new mongoose.model("Videos",{
    filename : String,
    path : String,
    size : {
        type: Number,
        validate(value){
            const valueInMB = value/1024/1024
            if(valueInMB > 500) throw new Error("File too large")
        }
    }
});
module.exports = Videos;