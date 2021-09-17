const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');


//   res.send('ok');


app.get('/',(req,res)=>{
    
    const timeStamp = Date.now();
    const date = new Date(timeStamp)
    const fname = date.getDate()+
    "/"+(date.getMonth()+1)+
    "/"+date.getFullYear()+
    " "+date.getHours()+
    ":"+date.getMinutes()+
    ":"+date.getSeconds();

    const p = path.join(
        path.dirname(require.main.filename),
        "data",
        "mentors.json"
      );
      console.log(p)
    
    console.log(fname)
    res.send("ok")
})

app.listen('5000',()=>console.log("server listerning to port 5000"))


