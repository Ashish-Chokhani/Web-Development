// $("h1").css("color","red");

setTimeout(function(){
  $("h1").addClass("big-title");
},100);

setTimeout(function(){
  $("h1").removeClass("big-title");
},10000);

$("h1").text("GoodBye!");
$("button").html("<em>HEY</em>");
// $("h1").removeClass("big-title");
$("a").attr("href","https://www.yahoo.com");


$("button").click(function(){
  $("h1").css("color","purple");
});

$("input").keydown(function(event){
  $("h1").text(event.key);
});

$("button").on("click",function(){
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
