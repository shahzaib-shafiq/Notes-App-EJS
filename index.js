const express = require('express')
const path=require('path')
const app = express()
const fs=require('fs')
 app.set("view engine","ejs")
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/', function (req, res) {
  fs.readdir('./files', function (err, files) {
    if (err) {
      console.error("Error reading directory:", err);
      return res.status(500).send("Error reading files.");
    }
    res.render('index', { files: files });
  });
});


app.listen(3000)