const express = require('express');
const path=require('path');
const multer = require('multer');
const tensor_predict = require('./ml_model/predict.js');

const app = express();

// Serve static files from the "public" directory
app.use(express.static('public/css'));

//Server side rendering using ejs
app.set("view engine","ejs");
app.set('views',path.resolve("./views"));


//Store the uploaded files to the local 'upload' directory
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, './upload');
   },
  filename: function (req, file, cb) {
      cb(null , file.originalname);
  }
});
const upload=multer({storage:storage});


//http requests to handle get and post requests
app.get('/',(req,res)=>{
  return res.render('index');
})

app.post('/upload',upload.single("uploadPhoto"),(req,res)=>{

  console.log(req.file);
  //tensor_predict.loadedModel.predict();
  return res.redirect("/");
})

//exposing the server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});