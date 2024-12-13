ear//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const dbUrl="mongodb+srv://Ashish:chokhani@cluster0.loan8m2.mongodb.net/todoListDB";

 const connectionParams = {
   useNewUrlParser: true,
   useUnifiedTopology: true,
 }

  mongoose.connect(dbUrl,connectionParams).then(function(){
    console.log("Connected");
  }).catch(function(error){
    console.log(error);
  });

 const itemsSchema = new mongoose.Schema({
   name: String
 });

 const Item=mongoose.model("Item",itemsSchema);

 const buy= new Item({
   name:"Buy Food"
 });

 const cook= new Item({
   name:"Cook Food"
 });

 const eat= new Item({
   name:"Eat Food"
 });

 const defaultList= [buy,cook,eat];

 const listSchema = new mongoose.Schema({
   name: String,
   items: [itemsSchema]
 })

 const List= mongoose.model("List",listSchema);

 const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  Item.find(Item.items).then(function(result){
    // setTimeout(() => {
    //   mongoose.connection.close();
    // }, 5);
    if(result.length===0)
    {
      Item.insertMany([buy,cook,eat]).then(function(){
      console.log("Data inserted");  // Success
      }).catch(function(error){
      console.log(error);
      });
      res.redirect("/");
    }else{
      res.render("list", {listTitle: "Today", newListItems: result});
    }
  }).catch(function(error){
    console.log(error)      // Failure
  });
});

app.post("/", function(req, res){

  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item=new Item({
    name: itemName
  });

  if(listName==="Today"){
    item.save();
    res.redirect("/");
  }
  else{
    List.findOne({name: listName}).then(function(result){
      result.items.push(item);
      result.save();
      res.redirect("/" + listName);
    }).catch(function(error){

    });
  }

});

app.post("/delete",function(req,res){
  const checkedItemId=req.body.checkbox;
  const listName=req.body.listName;
  if(listName==="Today"){
    Item.deleteOne({_id: checkedItemId}).then(function(){
      res.redirect("/");
    }).catch(function(error){
      console.log(error); // Failure
    });
  }
  else{
    List.findOneAndUpdate({name: listName},{$pull: {items: {_id: checkedItemId}}}).then(function(){
      res.redirect("/" + listName);
    }).catch(function(error){

    });
    }
});

app.get("/:topic", function(req,res){
  const customListName=_.capitalize(req.params.topic);
  List.findOne({name: customListName}).then(function(result){
    if(result){
      //List already present
      res.render("list",{listTitle: result.name,newListItems: result.items});
    }else{
      //Create new list
      const list=new List({
        name: customListName,
        items: defaultList
      });
      list.save();
      res.redirect("/" + customListName);
    }
  }).catch(function(error){
  });
});

// app.get("/work", function(req,res){
//   res.render("list", {listTitle: "Work List", newListItems: workItems});
// });

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
