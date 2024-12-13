const fs= require("fs");

// fs.writeFile("message.txt", "Hello from Node.js!",(err) => {
//     if (err)
//       console.log(err);
//     else {
//       console.log("File written successfully\n");
//       console.log("The written has the following contents:");
//       console.log(fs.readFileSync("message.txt", "utf8"));
//     }
//   });

fs.readFile('message.txt',"utf8",(err, data) => {
    if (err) throw err;
    console.log(data);
  }); 