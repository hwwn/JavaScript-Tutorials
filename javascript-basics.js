
/***************************************************************
***************************************************************/

/***************************************************************
***************************************************************/

/***************************************************************
***************************************************************/

/***************************************************************
***************************************************************/

/***************************************************************
***************************************************************/

/***************************************************************
***************************************************************/

/***************************************************************
***************************************************************/

/***************************************************************
***************************************************************/

/***************************************************************
***************************************************************/

/* 17. Copying Arrays */

var original = [true, true, undefined, false, null];

// slice
var copy1 = original.slice(0);


// spread operator
var copy2 = [...original];
console.log(copy1, copy2);


// DEEP copying
var deepArray = [["freeCodeCamp"]];
var shallowCopy = deepArray.slice(0);

shallowCopy[0].push("is great");
console.log(deepArray[0], shallowCopy[0])

var deepCopy = JSON.parse(JSON.stringify(deepArray));

deepCopy[0].push("is great");
console.log(deepArray[0], deepCopy[0])

/***************************************************************
***************************************************************/

/* 18. Random numbers & parseInt */

// console.log(Math.floor(Math.random() * 20));

function randomRange(min, max) {
    
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    console.log(randomRange(1, 9));
    
    
    console.log(parseInt("11", 2));

/***************************************************************
***************************************************************/

/* 19. For Loops */

// for ([initialization]; [condition]; [final-expression]) {}

var ourArray = [];
for (var i = 0; i < 5; i++) {
  if (i > 2) break;
  ourArray.push(i);
}
console.log(ourArray);

var arr = [10,9,8,7,6];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

var arr = [
 [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
 for (var j=0; j < arr[i].length; j++) {
   console.log(arr[i][j]);
 }
}

/***************************************************************
***************************************************************/

/* 20. While, Do While */

var n = 0;

while (n < 5) {
  n++;
  //if (n == 3) continue;
  if (n == 3) break;
  console.log("n = " + n);
}

var i = 0;

do {
  i++;
  console.log("i = " + i);
} while (i < 5);

// &turn_off_js=true

/***************************************************************
***************************************************************/

/* 21. for... in / for... of */

// usage

// for (variable in object) {
//   statements
// }

// for (variable of object) {
//   statement
// }

let person = {fname:"Beau", lname:"Carnes", arms:2}; 

let arr = [3, 5, 7];
arr.foo = 'hello';

let text = "";
for (let x in person) {
  text += person[x];
  console.log(x);
};
console.log(text);

for (let i in arr) {
  console.log(i); // "0" "1" "2" "foo"
};

for (let i of arr) {
  console.log(i); // "3" "5" "7"
};

/***************************************************************
***************************************************************/

/* 22. Array iteration: 8 methods */

// forEach
[1, 2, 3].forEach(function (item, index) {
    console.log(item, index);
  });
  
  
  // map
  const three = [1, 2, 3];
  const doubled = three.map(function (item) {
    return item * 2;
  });
  console.log(doubled);
  
  
  // filter
  const ints = [1, 2, 3];
  const evens = ints.filter(function (item) {
    return item % 2 === 0;
  });
  console.log(evens);
  
  
  // reduce
  const sum = [1, 2, 3].reduce(function (result, item) {
    return result + item;
  }, 0);
  console.log(sum)
  
  
  // some
  const hasNegativeNumbers = [1, 2, 3, -1, 4].some(function (item) {
    return item < 0;
  });
  console.log(hasNegativeNumbers);
  
  
  // every
  const allPositiveNumbers = [1, 2, -3].every(function (item) {
    return item > 0;
  });
  console.log(allPositiveNumbers);
  
  
  // find
  const objects = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
  const found = objects.find(function (item) {
    return item.id === 'b';
  });
  console.log(found);
  
  
  // find index
  const objects2 = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
  const foundIndex = objects2.findIndex(function (item) {
    return item.id === 'b';
  });
  console.log(foundIndex)
  
/***************************************************************
***************************************************************/

/* 23. Objects */

var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.color;
console.log(myCar.make);
console.log(myCar.color);

myCar["year"] = 1969;
console.log(myCar["model"])

myCar["Do I like?"] = "I hate my car.";
console.log(myCar["Do I like?"]);



function showProps(obj, objName) {
  var result = "";
  for (var i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += objName + "." + i + " = " + obj[i] + "\n";
    }
  }
  return result;
}
console.log(showProps(myCar, "myCar"));

// Creation: object initializer
var myHonda = {color: "red", wheels: 4, engine: {cylinders: 4, size: 2.2}};

// Creation: constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var mycar = new Car("Chevy", "Malibu", 1993);
var anothercar = new Car("Mazda", "Miata", 1990);
console.log(mycar.model);
mycar.color = "black";
console.log(mycar.color);

// Creation: Object.create
var Animal = {
  type: "Invertebrates", 
  displayType: function() {  
    console.log(this.type);
  }
}

var animal1 = Object.create(Animal);
animal1.displayType(); 

var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType();

/***************************************************************
***************************************************************/

/* 24. Objects 2 */

// Using Objects for Lookups

var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W"
  //...
};
console.log(alpha[2]);

// Remove Object Propertises

let dishes = {
  plates: 8,
  cups: 10,
  forks: 28,
  bowls: 13
};
delete dishes.cups;
console.log(dishes);

// Testing Objects for Properties

console.log(dishes.hasOwnProperty('plates'));
console.log(dishes.hasOwnProperty('cups'));

// Accessing and Modifying Nested Objects

var ourStroage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": "a file",
    "folder1": "a file",
    "folder2": "secrets",
  },
  "bottom drawer": "soda"
};
console.log(ourStroge.cabinet["top drawer"].folder2);
console.log(ourStroge.desk.drawer);
ourStroage.cabinet["top drawer"].folder2 = "cake recipe";
console.log(ourStorage.cabinet["top drawer"].floder2);

// Generate an Array of All Object Keys

console.log(Object.keys(ourStroage));

/***************************************************************
***************************************************************/

/* 25. AJAX = Asynchronous JavaScript And XML */

{/* <h1>AJAX with JavaScript!</h1>
    <p id="demo">Let AJAX change this text</p> 
    <button type="button" onclick="loadDoc()">Change Content</button> */}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  //readyState 
  // 0      The request is not initialized
  // 1      The request has been set up
  // 2      The request has been sent
  // 3      The request is in process
  // 4      The request is complete
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://carnes.cc/code/ajax_example.txt", true);
  xhttp.send();
}

/* 
Adding "https://cors-anywhere.herokuapp.com/" prevents the following error:

XMLHttpRequest cannot load http://carnes.cc/code/ajax_example.txt. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'https://s.codepen.io' is therefore not allowed access.
*/

/***************************************************************
***************************************************************/

/* 26. JS Nuggets: JSON */

// example
var myJSON = {
  "name": {
      "first": "Beau",
      "last": "Carnes"
  },
  "age":33,
  "skills": [ "juggling", "stiltwalking", "coding" ],
  "married": true,
  "superpowers": null
}

// stringify method
var stringified = JSON.stringify(myJSON);
console.log(stringified);


// parse method
var stringJSON = '{ "name":"Beau", "kids":2,"state":"Michigan"}';
var myParse = JSON.parse(stringJSON);
console.log(myParse);

/***************************************************************
***************************************************************/

/***************************************************************
***************************************************************/

/***************************************************************
***************************************************************/

/***************************************************************
***************************************************************/

/***************************************************************
***************************************************************/
