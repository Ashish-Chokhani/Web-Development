const express=require("express");
const https=require("https");
const app=express();
const bodyParer=require("body-parser");

app.use(bodyParer.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
  const cityName=req.body.CityName;
  const apiKey="9b8437713ee1fe97d93cd5b4d9a8ed33";
  const unit="metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey+"&units="+unit;
  //const url="https://api.openweathermap.org/data/2.5/weather?q=Gorakhpur&appid=9b8437713ee1fe97d93cd5b4d9a8ed33&units=metric";
  https.get(url,function(response){
    console.log(response.statusCode);
  //res.send("Hello world");
  response.on("data",function(data){
    const weatherData=JSON.parse(data);
    // console.log(weatherData);
    const temp=weatherData.main.temp;
    const description=weatherData.weather[0].description;
    const iconId=weatherData.weather[0].icon;
    const iconURL="https://openweathermap.org/img/wn/" + iconId +"@2x.png";
    console.log(description);

    res.write("<h1>The temperature in " +cityName+ " is " + temp + " degree Celcius</h1>");
    res.write("<h2>The weather in "+cityName+" is currently " + description +"</h2>");
    res.write("<img src= "+iconURL+" >");
    res.send();
    });
  })
});

app.listen(3000,function(){
  console.log("Server is running on port 3000");
});
