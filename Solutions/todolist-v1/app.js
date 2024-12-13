const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname + "/date.js");

const app=express();

const newItems=["Buy Food","Cook Food","Eat Food"];
const workList=[];

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){

  const day=date.getDay();

  res.render("lists",{listTitle: day,newListItems: newItems});
});

app.post("/",function(req,res){
  console.log(req.body);
  item=req.body.toDo;
  if(req.body.list==="Work"){
  workList.push(item);
  res.redirect("/work");
  }
  else{
    newItems.push(item);
    res.redirect("/");
  }
});

app.get("/work",function(req,res){
  res.render("lists",{listTitle: "Work List",newListItems: workList});
});

app.get("/about",function(req,res){
  res.render("about");
});

app.post("/work",function(req,res){
  item=req.body.toDo;
  workList.push(item);
  res.redirect("/work");
});

app.listen(3000,function(req,res){
  console.log("Server is running on port 3000");
})
