const mongoose=require("mongoose");
    mongoose.connect("mongodb://localhost:27017/fruitsDB");
    console.log("Connected successfully to the server");

    const fruitSchema=new mongoose.Schema({
      name: {
        type: String,
        required: [true,"Please check ypur data entry no name specified"]
      },
      rating: {
        type: Number,
        min: 1,
        max:10
      },
      review: String
    });

    const Fruit=mongoose.model("Fruit",fruitSchema);

    // const fruit=new Fruit({
    //   name: "Apple",
    //   rating: 4,
    //   review: "Pretty Solid as a fruit"
    // });

    const kiwi=new Fruit({
      name: "Kiwi",
      rating: 8,
      review: "Pretty Solid as a fruit"
    });

    // const orange=new Fruit({
    //   name: "Orange",
    //   rating: 8,
    //   review: "Good fruit"
    // });
    const mango=new Fruit({
      name: "Mango",
      rating: 10,
      review: "Pretty Solid as a fruit"
    });

    const banana=new Fruit({
      name: "Banana",
      rating: 6,
      review: "Pretty Solid as a fruit"
    });

    const guava=new Fruit({
      name: "Guava",
      rating: 10,
      review: "Nice fruit"
    });



    // Fruit.insertMany([kiwi,mango,banana]).then(function(){
    //  console.log("Data inserted");  // Success
    //  }).catch(function(error){
    //  console.log(error);
    //  });

    async function insertItems()
    {
    Fruit.insertMany([
    kiwi,mango,banana
    ]).then(function(){
      console.log("Data inserted")  // Success
    }).catch(function(error){
      console.log(error)      // Failure
    });
    }

     //guava.save();

    // const personSchema=new mongoose.Schema({
    //   name: String,
    //   age: Number,
    //   favouriteFruit: fruitSchema
    // });
    //
    // const Person=mongoose.model("Person",personSchema);
    // //
    // const person=new Person({
    //   name: "John",
    //   age: 21
    // });

    //person.save();

    // async function upDate() {
    //   const res = await Person.updateOne({name: "John"}, {favouriteFruit: pineapple})
    // }
    //
    // upDate();

    // async function deleTe() {
    //   await Person.deleteMany({name: "John"})
    // }

    //deleTe();

    // async function myfunction() {
    //     let singleFruit = await Fruit.find (Fruit.fruits);
    //     return singleFruit;
    // }

    // async function yourfunction() {
    //     let singlePerson = await Person.find (Person.people);
    //     return singlePerson;
    // }

    //const fru=myfunction();
    //const per=yourfunction();

    // fru.then(function(result) { // "Some User token"
    //   setTimeout(() => {
    //     mongoose.connection.close();
    //   }, 5);
    //   result.forEach(function(fruit){
    //     console.log(fruit);
    //   })
    // });

    insertItems();

    Fruit.find(Fruit.fruits).then(function(result){
      console.log(result)  // Success
    }).catch(function(error){
      console.log(error)      // Failure
    });

    // per.then(function(result) { // "Some User token"
    //   setTimeout(() => {
    //     mongoose.connection.close();
    //   }, 5);
    //   result.forEach(function(person){
    //     console.log(person);
    //   })
    // });
