const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const p = (fname)=> (path.join(
    path.dirname(require.main.filename),
    "data",
    fname
  ))

const allFiles = (cb) => {
    fs.readdir(p, (err, fileContent) => {
      if (err) {
        console.log(err)
      } else {
        console.log(fileContent)
      }
    });
  };

app.get('/',(req,res)=>{
    fs.readdir(path, callbackFunction) 
})

app.get('/create-file',(req,res)=>{
    
    const timeStamp = Date.now();
    const date = new Date(timeStamp)
    const fname = date.getDate()+
    "-"+(date.getMonth()+1)+
    "-"+date.getFullYear()+
    " "+date.getHours()+
    "."+date.getMinutes()+
    "."+date.getSeconds()+".txt";
   
    console.log(p(fname))

      fs.writeFile(p(fname), timeStamp.toString(), (err) => {console.log(err)});

    res.json({message:`created file ${fname}`})
})

app.listen('5000',()=>console.log("server listerning to port 5000"))


