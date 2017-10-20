/* 1. Const vs Let vs Var */

// const

const Pi = 3.14;

 // Pi = 1 : Uncaught TypeError

console.log(Pi);

// let

//console.log(i); error
for(let i =0; i <3; i++){
    console.log(i);
}
//console.log(i); error

// var

//console.log(j); unfifined
for(var j =0; j <3; j++){
    console.log(j);
}
//console.log(j); 3

/***************************************************************
***************************************************************/

/* 2. Classes */

//**class declaration**
class Person {
    constructor(name, year_born) {
      this.name = name;
      this.year_born = year_born;
    }
    
    get age() {
      return this.calcAge();
    }
  
    calcAge() {
      return new Date().getFullYear() - this.year_born;
    }
    
    what() {
      console.log(this.name + ' is a person.');
    }
    
    static arms() {
      return 2;
    }
}
  
var me = new Person("Beau", 1983);
console.log(me.name + " was born in " + me.year_born + "!")
me.what();
console.log(me.name + " has " + Person.arms() + " arms!")
  
/* class Juggler extends Person {
  what() {
    console.log(this.name + " is a juggler.");
  }
}
  
var you = new Juggler ("Jay", 1980);
me.what(); // "Beau is a person."
you.what(); // "Jay is a juggler."
 */
class Juggler extends Person {
  what() {
    super.what();
    console.log(this.name + " is a juggler.");
  }
}
  
var you = new Juggler ("Jay", 1980);
me.what(); // "Jay is a person."
you.what(); // "Jay is a juggler."
  
  
  //**class expressions**
  // unnamed
  var Person2 = class {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  };
  
  // named
  var Person3 = class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  };

/***************************************************************
***************************************************************/

/* Symbols */

// Creation

let symbol1 = Symbol('symbol2');
let symbol2 = Symbol('symbol2');
console.log(symbol1 === symbol2);
console.log(typeof symbol1);
console.log('symbol: ' + symbol1.toString());


// Use case 1: Symbols as property keys
   const MY_KEY = Symbol();
    let obj = {};
    
    obj[MY_KEY] = 123;
    console.log(obj[MY_KEY]);


// Use case 2: constants representing concepts
const COLOR_RED    = Symbol('Red');
const COLOR_ORANGE = Symbol('Orange');
const COLOR_YELLOW = Symbol('Yellow');
const COLOR_GREEN  = Symbol('Green');
const COLOR_BLUE   = Symbol('Blue');
const COLOR_VIOLET = Symbol('Violet');

function getComplement(color) {
    switch (color) {
        case COLOR_RED:
            return COLOR_GREEN;
        case COLOR_ORANGE:
            return COLOR_BLUE;
        case COLOR_YELLOW:
            return COLOR_VIOLET;
        case COLOR_GREEN:
            return COLOR_RED;
        case COLOR_BLUE:
            return COLOR_ORANGE;
        case COLOR_VIOLET:
            return COLOR_YELLOW;
        default:
            throw new Exception('Unknown color: '+color);
    }
}

/***************************************************************
***************************************************************/

/* 4. Template Literals */

// muti-line strings
console.log(`string text line 1
string text line2`);

// expression interpolation
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and\nnot ${2 * a + b}`);

// Tagged template literals
function tag(strings, ...values){
    console.log(strings);
    console.log(values);

    return "JS Nuggets!";
}

console.log(tag`Hello ${a + b} world ${a * b}`);

// exemple:
function template(strings, ...keys) {
    return (function(...values) {
        var dict = values[values.length - 1] || {}
        var result = [strings[0]];
        keys.forEach(function(key, i) {
            var value = Number.isInteger(key) ? values[key] : dict[key];
            result.push(value, strings[i + 1]);
        });
        return result.join('');
    });
}

var t1Closure = template`${0}${1}${0}`;
console.log(t1Closure('Y', 'A'));
var t2Closure = template`${0} ${'foo'}`;
// console.log(t2Cloure('Hello', {foo: 'World'}))



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
