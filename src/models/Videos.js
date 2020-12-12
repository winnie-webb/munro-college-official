function sendVideo(mongoose) {
const Video = new mongoose.model("Videos",{
    filename : String,
    path : String,
    size : {
        type: Number,
        validate(value){
            if(value > 500000) throw new Error("File too large")
        }
    }
});
return Video;
};
module.exports = sendVideo;