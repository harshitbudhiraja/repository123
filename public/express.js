const express = require('express');

const app = express();


app.get("/home" ,function(req,res){

    console.log("this is home page");

})

app.get("*",function(req,res){

    console.log("<h1>404</h1>");
})

app.listen(3000,function(req,res){
    console.log("server is listening at 3000")
})