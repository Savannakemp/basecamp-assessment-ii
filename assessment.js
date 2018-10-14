// #1 Create an object called 'me' that has three keys, 'firstname' 'age' and 'state'. Assign the keys the appropriate values.

// CODE HERE
var me = {
  firstname: "savanna",
  age: 24,
  state: "Utah"
};

// #2 Add a new key/value pair to the me object using dot notation. The new key should be 'faveColor' and set it to your favorite color as a string

//CODE HERE
me.favColor = "black";

// #3 Below is an object, 'message'. Below it, add a 'text' key using bracket notation and assign it a string of whatever you would like.
//DON'T TOUCH THE CODE BELOW
var message = {
  date: new Date(),
  userName: me.firstname
};
//DON'T TOUCH THE CODE ABOVE
// CODE HERE
message["text"] = "plant";
// #4 Create an object called 'adjustCount' and create two methods. One called 'upVote' and one called 'downVote'. 
//upVote should take in a number and add one to it and downVote should take in a number and minus one from it.

// CODE HERE
var adjustCount = {
  upVote: function (param1){
    return param1++
  },
  downVote: function (param2){
    return param2--
  }
}
console.log(adjustCount.upVote);
console.log(adjustCount.downVote);

// #5 Create an array called 'myFriends' with four of your friends names

// CODE HERE
var myFriends = ["josh","Bill","Bob","Joe"];
// #6 Add a fifth friends name to the end of your myFriends array

// CODE HERE
myFriends[4] = "Jill"
console.log(myFriends);
// #7 Create a 'myArrayCopy' variable. It should equal the myArray variable. Use the built in JavaScript method to create a copy.
//DON'T TOUCH THE CODE BELOW
var myArray = [1, 2, 3, 4];
//DON'T TOUCH THE CODE ABOVE
// CODE HERE
var myArrayCopy = [1, 2, 3, 4];

// #8 Below is a array, myNumbers. Create a function called 'evensOnly' that returns the 
//'evensArray' of only even numbers
//DON'T TOUCH THE CODE BELOW
var myNumber = [333, 1, 4, 5, 511, 34, 88, 77, 222];
//DON'T TOUCH THE CODE ABOVE
// CODE HERE
  function evensOnly(num){
    var evensArray = [];
   if (num%2===evensOnly){
    evensArray.push(true)
    for(i=0; i=evensOnly; i++){
      evensArray.push(true)
    };
   };
};

// #9 Using filter(), return only your friends of the array of people below. 
//Assign it to a variable called 'trueFriends'.
// CODE HERE
var peopleIknow = [
  { name: "Steve", friend: true },
  { name: "Dan", friend: false },
  { name: "Bart", friend: true },
  { name: "Sarah", friend: false },
  { name: "Michelle", friend: false },
  { name: "Holly", friend: true }
];

var trueFriends = [];
var trueFriends = peopleIknow.filter(function (value, i, arr){
if (value.friend===true){
  return trueFriends.push(value.name)
}}
);
console.log(trueFriends);

// #10 Create a function called indexFinder that will loop over an array and return a new array 
//of the indexes of the contents e.g. [243, 123, 4, 12] would return [0,1,2,3]. 
// Create a new variable called 'indexes' and set it to contain the indexes of randomNumbers.
let randomNumbers = [1, 3453, 34, 456, 32, 3, 2, 0];
var indexes = (0, 1, 2, 3, 4, 5, 6, 7);
function indexFinder (){
for (i=0; i<=indexes; i++)
randomNumbers.push(i);
};
console.log(indexes);