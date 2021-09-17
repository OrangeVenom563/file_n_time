const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const path = require('path');

const p = (fname)=> (path.join(
    path.dirname(require.main.filename),
    "data",
    fname
  ))

app.use(cors());

app.get('/',(req,res)=>{
    fs.readdir(p(''), (err,dirContent)=>{
        if(err){
            res.json({error:err})
        }else{
            res.json({'files_created':dirContent})
        }
    }) 
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

    fs.writeFile(p(fname), timeStamp.toString(), (err) => {console.log(err)});
    res.json({message:`created file ${fname}`})
})

app.listen(process.env.PORT||'5000',()=>console.log("server listerning to port 5000"))


