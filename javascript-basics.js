
/* 1. Varibales */
var myName; // var let const
myName = "hwwn";

var state = "cool";

console.log("My name is " + myName);

state = "California";

//0-9, a-z, A-Z, _

/***************************************************************
***************************************************************/

/* 2. Data Types */

// There are 7 data types

// Boolean. true and false

var data = true;

if (data) {
  console.log("Booleans rule!")
} else {
  console.log("Booleans are lame.")
}

// null. is an assignment value that means “no value”

var n = null;
console.log(n * 32);

// undefined. means a variable has not been declared, or has been declared but has not yet been assigned a value

var a;
console.log(a + 2);

// Number. 42 or 3.14159.

var num = 3.6;
var ber = 6.4;
console.log(num + ber);

// String. "Hey!"

var name = "Beau";
console.log("Hi! My name is " + name);

// Symbol (new in ECMAScript 2015). A data type whose instances are unique and immutable.

var sym1 = Symbol("foo");
var sym2 = Symbol("foo");
console.log(sym1 === sym2)
console.log(String(sym1) === String(sym2))

// Object - An object is a collection of properties, and a property is an association between a name (or key) and a value.

var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";

console.log(myCar.make);

/***************************************************************
***************************************************************/

/* 3. Number */
var number = 12 + 2; // + - * / %

number += 5; // += -= *= /= %=

console.log(++number)
console.log(number);

/***************************************************************
***************************************************************/

/* 4. Strings */

var myName = 'Beau';

var sentence = "He said \"Hi!\""; // He said Hi!
var sentence = 'He said "Hi!"'; // He said Hi!

/*
Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	backspace
\f	form feed
*/

var fullName = 'Beau ' + 'Carnes';  // 'Beau Carnes'

var sentence2 = 'My name is ' + fullName; // 'My name is Beau Carnes'

fullName += ' is my name.'; // 'Beau Carnes is my name'

/***************************************************************
***************************************************************/

/* 5. Strings: [bracket notation] */

var firstName = "Beau";

console.log(firstName[firstName.length - 2]);
//firstName[0] = "Q";
firstName = "Quincy";
console.log(firstName);

/***************************************************************
***************************************************************/

/* 6. twenty String Methods */

var stringOne = "freeCodeCamp is the best place to learn"
var stringTwo = "frontend and backend development"

// charAt()
console.log(stringOne.charAt(1)) // "r"

// charCodeAt()
console.log(stringOne.charCodeAt(1)) // "114"

// concat()
console.log(stringOne.concat(stringTwo)) // "freeCodeCamp is the best place to learnfrontend and backend development"

// endsWith()
console.log(stringOne.endsWith("to")) // false

// fromCharCode()
console.log(String.fromCharCode(114)) // "r"

// includes()
console.log(stringTwo.includes("end")) // true

// indexOf()
console.log(stringTwo.indexOf("end")) // 5

// lastIndexOf()
console.log(stringTwo.lastIndexOf("end")) // 17

// match()
console.log(stringTwo.match(/end/g)) // ["end", "end"]

// repeat()
console.log(stringOne.repeat(3)) // "freeCodeCamp is the best place to learnfreeCodeCamp is the best place to learnfreeCodeCamp is the best place to learn"

// replace()
console.log(stringTwo.replace(/end/g, "END")) // "frontEND and backEND development"

// search()
console.log(stringTwo.search("end")) // 5

// slice()
console.log(stringTwo.slice(2, 4)) // "on"

// split()
console.log(stringOne.split(" ")) // ["freeCodeCamp", "is", "the", "best", "place", "to, "learn"]

// startsWith()
console.log(stringOne.startsWith("free")) // true

// substr()
console.log(stringTwo.substr(2, 4)) // "onte"

// substring()
console.log(stringTwo.substring(2, 4)) // "on"

// toLowerCase()
console.log(stringOne.toLowerCase()) // "freecodecamp is the best place to learn"

// toUpperCase()
console.log(stringOne.toUpperCase()) // "FREECODECAMP IS THE BEST PLACE TO LEARN"

// trim()
var stringThree = "     Subscribe now!      ";
console.log(stringThree.trim()) // "Subscribe now!"

/***************************************************************
***************************************************************/

/* 7. Functions */

function square(number) {
  return number * number;
}

console.log(square(4));

var someVar = "Hat";
function myFun() {
  var someVar = "Shoes";
  console.log(someVar);
}

myFun();
console.log(someVar);

console.log(addSquares(1, 3));

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41

/***************************************************************
***************************************************************/

/* 8. Hoisting */

// console.log(notDeclared); // Uncaught ReferenceError: notDeclared is not defined

console.log(definedLater);
var definedLater;
definedLater = 'I am defined!'
console.log(definedLater)


console.log(definedSimulateneously);
var definedSimulateneously = 'I am defined!'
console.log(definedSimulateneously)


doSomethingElse();
function doSomethingElse(){
  console.log('I did it!');
}


functionVar(); // Uncaught TypeError: functionVar is not a function
var functionVar = function(){
  console.log('I did it!');
}

/***************************************************************
***************************************************************/

/* 9. Comparison Operators & If... Else */

var isFCCGreat = true;

if (isFCCGreat) {
  console.log("Free Code Camp is amazing!");
} else {
  console.log("Free Code Camp is horrible!");
}; 

// Comparison Operators: > < <= >= == !=

var age = 10;

if (age >= 18) {
  console.log("You are an adult!");
} else if (age < 2) {
  console.log("You are a baby!");
} else if (age < 18) {
  console.log("You are a child!");
};

if (age != 18) {console.log("You are NOT eighteen.")};

/***************************************************************
***************************************************************/

/* 10. == vs === */

// == abstract equality

// === strict equality

console.log(3 == "3");
console.log(3 === "3");

console.log(true == '1');
console.log(true === '1');

console.log("This is a string." == new String("This is a string."));
console.log("This is a string." === new String("This is a string."));

/***************************************************************
***************************************************************/

/* 11. Null vs Undefined */

var test
console.log(test)

test = null

console.log(test)

console.log(typeof null)
console.log(typeof undefined)
console.log(null === undefined)
console.log(null == undefined)
console.log(null === null)
console.log(null == null)
console.log(!null)
console.log(!!null)
console.log(1 + null)
console.log(1 + undefined)

/***************************************************************
***************************************************************/

/* 12 Short-circuit Evaluation */
if ( 4 > 5 && 5 > 6 ) {
  console.log("hi")
} else {
  console.log("no")
}

var test = true;
var isTrue = function(){
  console.log('Test is true.');
};
var isFalse = function(){
  console.log('Test is false.');
};

if(test){
//  isTrue();
}

( test && isTrue() );


test = false;
if(!test){
  isFalse(); 
}

( test || isFalse());



function theSameOldFoo(name){ 
  name = name || 'Bar' ;
  console.log("My best friend's name is " + name);
}
theSameOldFoo(); 
theSameOldFoo('Beau'); 

/***************************************************************
***************************************************************/

/* 13. Ternary Operator */

// condition ? expr1 : expr2

var age = 15;

if (age >= 18) {
	console.log("You are an adult!");
} else {
	console.log("You are a kid");
};

console.log((age >= 18) ? "You are an adult!" : "You are a kid.");

var stop;

age > 18 ? (
    console.log("OK, you can go."),
    stop = false
) : (
    console.log("Sorry, you are much too young!"),
    stop = true
);

var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? "Access denied" : secondCheck ? "Access denied" : "Access granted";

console.log(access);
  
/***************************************************************
***************************************************************/
  
/* 14. Switch Statements */

let day;
switch (new Date().getDay()) {
    case 0:
    	day = "Sunday";
        break;
    case 1:
    	day = "Monday";
        break;
    case 2:
    	day = "Tuesday";
        break;
    case 3:
    	day = "Wednesday";
        break;
    case 4:
    	day = "Thursday";
        break;
    case 5:
    	day = "Friday";
        break;
    case 6:
    	day = "Saturday";
}
console.log(day)


var Animal = 'chicken';
switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal will go on Noah\'s Ark.');
    Break;
  case 'Spoon':
    console.log('A spoon is not an animal!');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal will not be on the Ark.');
}

/***************************************************************
***************************************************************/
  
/* 15. Array Basics */

var sandwich = ["peanut butter", "jelly", "bread"];

var teams = [["Bulls", 23], ["White Sox", 45]];

console.log(sandwich[1]);

sandwich[1] = "bananas";
console.log(sandwich);

console.log(teams[1][0]);
teams[1][0] = "red socks";
console.log(teams);

sandwich.forEach(function(element) {
    console.log(element);
});

/***************************************************************
***************************************************************/

/* 16. 10 Common Array Methods */

var arr = ["a", "b", "c"];

arr.push("d"); 
console.log(arr); // ["a", "b", "c", "d"]

console.log(arr.pop()); // d
console.log(arr);

var arr2 = ["g", "q"];
console.log(arr.concat(arr2)); // ["a", "b", "c", "g", "q"]
console.log(arr2); // ["g", "q"]

console.log(arr.join("!")); "a!b!c"

console.log(arr.reverse()); // ["c", "b", "a"]
console.log(arr); // ["c", "b", "a"]

console.log(arr.shift()); // "c"
console.log(arr); // ["b", "a"]

console.log(arr.unshift("p")); // 3
console.log(arr);

console.log(arr.slice(1,3)); // ["b", "a"]

arr.push("i");
arr.push("f");
arr.sort(arr);
console.log(arr); // ["a", "b", "f", "i", "p"]

console.log(arr.splice(2, 2, "JS Nuggets")); // ["f", "i"]
console.log(arr); // ["a", "b", "JS Nuggets", "p"]

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
var shallowCopy = deepArray.slice(0); //not deep copy

shallowCopy[0].push("is great");
console.log(deepArray[0], shallowCopy[0])

var deepCopy = JSON.parse(JSON.stringify(deepArray)); //deep copy

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

let ar = [3, 5, 7];
ar.foo = 'hello';

let text = "";
for (let x in person) {
  text += person[x];
  console.log(x);
};
console.log(text);

for (let i in ar) {
  console.log(i); // "0" "1" "2" "foo"
};

for (let i of ar) {
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
console.log(ourStroage.cabinet["top drawer"].folder2);
console.log(ourStroage.desk.drawer);
ourStroage.cabinet["top drawer"].folder2 = "cake recipe";
console.log(ourStroage.cabinet["top drawer"].floder2);

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

/* 26. JSON */

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

// 27. Closures

function makeFunc() {
  var name = "JS Nuggets";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();


var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };   
})();

console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value()); 
counter.decrement();
console.log(counter.value());

/***************************************************************
***************************************************************/

/* 28. this */

/* The 'this' keyword refers to the object that "owns" the JavaScript code. */

console.log(this.document === document);

console.log(this === window);

this.a = 37;
console.log(window.a); 


function f1() {
  'use strict';
  return this;
}
console.log(f1() === window);



function add(c, d) {
  return this.a + this.b + c + d;
}

var o = {a: 1, b: 3};
console.log(add.call(o, 5, 7));
console.log(add.apply(o, [10, 20]));


function f() {
  return this.a;
}

var g = f.bind({a: 'unicycle'});
console.log(g());

var h = g.bind({a: 'cereal'}); // won’t work a second time
console.log(h());

var o = {a: 8, f: f, g: g, h: h};
console.log(o.f(), o.g(), o.h());


var o = {
 traditionalFunc: function () {
   console.log('traditionalFunc this === o?', this === o);
 },
 arrowFunc: () => {
   console.log('arrowFunc this === o?', this === o);
   console.log('arrowFunc this === window?', this === window);
 }
};

o.traditionalFunc();

o.arrowFunc();


var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f()); // logs 37

var o = {prop: 23};

function independent() {
  return this.prop;
}

o.f = independent;

console.log(o.f());

/***************************************************************
***************************************************************/

/* 29: Promises */

/* A promise in JavaScript represents the eventual result of an asynchronous operation. */

// Basic usage
var p = new Promise(function(resolve, reject) {
	
	// Do an async task async task and then...

	if(good_condition) {
		resolve('Success!');
	}
	else {
		reject('Failure!');
	}
});

p.then(function() { 
	/* do something with the result */
}).catch(function() {
	/* error */
})


// Complete example

var promiseCount = 0;

function testPromise() {
  var thisPromiseCount = ++promiseCount;
  console.log(thisPromiseCount + ': Started - Sync code started');

  var p1 = new Promise(function(resolve, reject) {
    console.log(thisPromiseCount + ': Promise started - Async code started');
    // This is only an example to create asynchronism
    window.setTimeout(
      function() {
        resolve(thisPromiseCount);
      }, Math.random() * 2000 + 1000);
  });

  p1.then(function(val) {
    console.log(val + ': Promise fulfilled - Async code terminated');
  }).catch(function(reason) {
    console.log('Handle rejected promise ('+reason+') here.');
  });

  console.log(thisPromiseCount + ': Promise made - Sync code terminated');
}

testPromise();
testPromise();
testPromise();

/***************************************************************
***************************************************************/

/* 30: Notifications API */

/* The Notifications API lets a web page or app send notifications that are displayed outside the page at the system level;
   this lets web apps send information to a user even if the application is idle or in the background. */

//Notification.requestPermission();

//new Notification("Subscribe to JS Nuggets!");

function notifyMe() {
  if (!("Notification" in window)) {
    alert("This browser does not support system notifications");
  }
  else if (Notification.permission === "granted") {
    notify();
  }
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        notify();
      }
    });
  }
  
  function notify() {
    var notification = new Notification('TITLE OF NOTIFICATION', {
      icon: 'http://carnes.cc/jsnuggets_avatar.jpg',
      body: "Hey! You are on notice!",
    });

    notification.onclick = function () {
      window.open("http://carnes.cc");      
    };
    setTimeout(notification.close.bind(notification), 7000); 
  }

}
notifyMe();

/***************************************************************
***************************************************************/

/* 31. Immediately Invoked Function Expression (IIFE)  */

(function () {
  console.log("My favorite number is 3");
})();

// function(num = 3) num as deflaut value = 3, if passe in a number, then num = number
(favNumber = function (num = 3) {
  console.log("My favorite number is " + num);
})();

favNumber(5);

// exemple:
var a = 2;

(function() {
  var a = 3;
  console.log(a); // a = 3
})();

console.log(a); // a = 2

// block exemple with ES6 let and const:
let b = 2;

{
  let b = 3;
  console.log(b);
}

console.log(b);

/***************************************************************
***************************************************************/

"use strict";
/* 32. Strict Mode */

function myFunction() {
  "use strict";
	var y = 3.14;  
}

// CONVERTING MISTAKES INTO ERRORS

var x = 3.14;
delete x;   

var obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});
obj.x = 3.14; 

var obj = {get x() {return 0} };
obj.x = 3.14;

delete Object.prototype;

function sum(a, a, c) { 
  'use strict';
  return a + b + c; 
}


// WITH AND EVAL CHANGES

var x = 17;
with (obj) {
  x; // Is this var x or obj.x?
}

eval("var x;")

var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);

// SECURING JAVASCRIPT: recommand to use the Strick Mode

/***************************************************************
***************************************************************/

/* 33. Check if a property is in an object */

var myObject = {
  name: 'JS Nuggets'
};

if (myObject.name) {
  console.log("it is in!")
}

console.log(myObject.hasOwnProperty('name')); // true
console.log('name' in myObject); // true

console.log(myObject.hasOwnProperty('valueOf')); // false: hasOwnProperty search only if the key is on that object directly
console.log('valueOf' in myObject); // true: in search if the property in inherited from the prototype chain

/***************************************************************
***************************************************************/

/* 34. setTimeout and setInterval */

/* <button onclick="clearInterval(intId)">Stop time</button> */

// setTimeout
var timeoutID = setTimeout(bye, 3000);

console.log('hello');

clearTimeout(timeoutID);

function bye() {
  console.log('goodbye');
}


// setInterval

var count = 0
var intId = setInterval(counter, 1000);
 
function counter() {
  console.log(++count);
}

/***************************************************************
***************************************************************/

/* 35. Try, catch, finally */

try {
  console.log('Start of try runs');
  
  unicycle;

  console.log('End of try runs -- never reached'); 

} catch(err) {

  console.log('Error has occured: ' + err.stack); 

} finally {
  console.log('This is always run'); 
}

console.log('...Then the execution continues');




let json = '{ "age": 30 }';
 
try {
 
  let user = JSON.parse(json); 
  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }
 
  console.log( user.name );
 
} catch(e) {
  console.log( "JSON Error: " + e );  // e.massage("Incomplete data: no name")  e.name(SyntaxError)  e
}

/***************************************************************
***************************************************************/

/* 36. Dates */

var d1 = new Date();
console.log(d1.toString());
console.log(d1.toDateString());
console.log(d1.toTimeString());
console.log(d1.toUTCString());

var d2 = new Date(2017, 1, 3, 42, 43, 23, 23); // month are from 0;
console.log(d2.toString())

var d3 = new Date(929397621000); // numbre of milliseconds from January 1sr 1970

var d4 = new Date("2015-03-25");
console.log(d4.toString());
console.log(d4.getDate());
console.log(d4.getDay());
d4.setYear(2020);
console.log(d4.toString());

var start = new Date();
doSomething();
var end = new Date();

var elapsed = end.getTime()-start.getTime();
console.log(elapsed);

function doSomething() {
  for(var i = 0; i < 10000000; i++) {

  }
}