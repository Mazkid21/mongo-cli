var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/retaurant_db";

  //var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
  //if(allChoice == "all"){
  //collection.find().toArray(function(err, doc){
  //     console.log(doc);
  //   });
  // } else {
  //   console.log("Aw, you don't want to see the restaurants?");
  // }

//TASK 1
    mongo.connect(url, function(err, db){
      var collection = db.collection('restaurants');
 
      var specific = prompt("Enter name of restaurant you are looking for' name:");
      	 collection.find({"name":specific}).toArray(function (err, doc) {
      		  console.log(doc);
      	});

     });

   // TASK 2

//    mongo.connect(url, function(err, db){
//   	var collection = db.collection('restaurants');
//   	var add = prompt("Enter name of restaurant to add' name:");
//   	var addAdress = prompt("Enter new' adress:");
//   		collection.insert({
//   			"name":add, 
//   			"adress":addAdress}, function (er, doc){
//   			console.log(doc);
//   		});
// });

Birch & Barley