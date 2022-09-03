const https=require("https");
const fs=require("fs");
const url="https://dz2cdn1.dzone.com/storage/temp/14227893-1607949811370.png";
https.get(url,function(res){
  const fileStream=fs.createWriteStream("node1.png");
  res.pipe(fileStream);
  fileStream.on("finish",function(){
    fileStream.close();
    console.log("Done!");
  });
});