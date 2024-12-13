exports.getDate=function (){
  let options={
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  let today=new Date();
  let day=today.toLocaleDateString("en-US",options);
  return day;
}

exports.getDay=function (){
  let options={
    weekday: "long",
  };
  let today=new Date();
  let day=today.toLocaleDateString("en-US",options);
  return day;
}

// switch (currentDay) {
//   case 0:
//     day="Sunday";
//     break;
//   case 1:
//     day="Monday";
//     break;
//   case 2:
//     day="Tuesday";
//     break;
//   case 3:
//     day="Wednesday";
//     break;
//   case 4:
//     day="Thursday";
//     break;
//   case 5:
//     day="Friday";
//     break;
//   case 6:
//     day="Saturday";
//     break;
//   default:
//   console.log("Error: currentDay is equal to:" + currentDay);
// }
