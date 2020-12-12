const fs = require("fs");

function parseVideo(form,Videos,req) {
    form.parse(req, function(err, fields, files){ 
            
        
        const oldPath = files.new_video.path; 
        const newPath = `${__dirname}/public/uploads/${files.new_video.name}`
        const rawData = fs.readFileSync(oldPath);

        const video = new Videos({
            filename: files.new_video.name,
            path : `uploads/${files.new_video.name}`,
            size : files.new_video.name
        })
        video.save()
        .then(() => console.log("New video released"))
        .catch(err => console.log(err));

        fs.writeFile(newPath, rawData, function(err){ 
            if(err) return console.log(err) ;
            return res.redirect("/dashboard") 
        }) 

  }) 
}
module.exports = parseVideo;