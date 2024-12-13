const express=require("express");

const app=express();

app.get("/",function(req,res){
  // console.log(request);n
  res.send("<h1>Hello World! </h1>");
});

app.get("/contact",function(req,res){
  res.send("Contact me at ashish@gmail.com")
});

app.get("/About",function(req,res){
  res.send("Hi I am Ashish!");
});

app.listen(3000,function(){
  console.log("Server started on 3000");
});
