/* Originale article:
   https://github.com/ryanmcdermott/clean-code-javascript
   To make Javascript functions that are readable, reusable, and refactorable.
*/

/* 1. Clean Code: Variables */

// Use meaningful and pronounceable variable names
var yearMonthDay = moment().format('YYYY/MM/DD');

// Use ES6 constants when variable values do not change
const FIRST_US_PRESIDENT = "George Washington";

// Use the same vocabulary for the same type of variable
getUser(); // No client, no customs etc

// Use searchable names
var MINUTES_IN_A_YEAR = 525600
for (var i = 0; i < MINUTES_IN_A_YEAR; i++) {
  runCronJob();
}

// Use explanatory variables
const cityStateRegex = /^(.+)[,\\s]+(.+?)\s*(\d{5})?$/;
const match = cityStateRegex.match(cityStateRegex);
const city = match[1];
const state = match[2]
saveCityState(city, state);

// Don't add unneeded context
var Car = {
  make: 'Honda',
  model: 'Accord',
  color: 'Blue'
};

function paintCar(car) {
  car.color = 'Red';
}

// Short-circuiting is cleaner than conditionals
function createMicrobrewery(name) {
  var breweryName = name || 'Hipster Brew Co.';
}

/***************************************************************
***************************************************************/

/* 2. Clean Code: Functions (Part 1) */

  // Function arguments (2 or fewer ideally)
  const menuConfig = {
    title: 'Foo',
    body: 'Bar',
    buttonText: 'Baz',
    cancellable: true
  };
  
  function createMenu(menuConfig) {
    // ...
  }
  
  
  // Functions should do one thing
  function emailClients(clients) {
    clients
      .filter(isClientActive)
      .forEach(email);
  }
  
  function isClientActive(client) {
    const clientRecord = database.lookup(client);
    return clientRecord.isActive();
  }
  
  
  
  // Function names should say what they do
  function addMonthToDate(month, date) {
    // ...
  }
  
  const date = new Date();
  addToDate(1, date);
  
  
  // Functions should only be one level of abstraction
  function parseBetterJSAlternative(code) {
    const REGEXES = [
      // ...
    ];
  
    const statements = code.split(' ');
    const tokens = [];
    REGEXES.forEach((REGEX) => {
      statements.forEach((statement) => {
        // ...
      });
    });
  
    const ast = [];
    tokens.forEach((token) => {
      // lex...
    });
  
    ast.forEach((node) => {
      // parse...
    });
  }
  // ******
  function tokenize(code) {
    const REGEXES = [
      // ...
    ];
  
    const statements = code.split(' ');
    const tokens = [];
    REGEXES.forEach((REGEX) => {
      statements.forEach((statement) => {
        tokens.push( /* ... */ );
      });
    });
  
    return tokens;
  }
  
  function lexer(tokens) {
    const ast = [];
    tokens.forEach((token) => {
      ast.push( /* ... */ );
    });
  
    return ast;
  }
  
  function parseBetterJSAlternative(code) {
    const tokens = tokenize(code);
    const ast = lexer(tokens);
    ast.forEach((node) => {
      // parse...
    });
  }
  
  
  // Remove duplicate code
  function showList(employee) {
    developers.forEach((employee) => {
      const expectedSalary = employee.calculateExpectedSalary();
      const experience = employee.getExperience();
      
      let portfolio = employee.getGithubLink();
      
      if (employee.type === 'manager') {
        portfolio = employee.getMBAProjects();
      }
      
      const data = {
        expectedSalary,
        experience,
        portfolio
      };
  
      render(data);
    });
  }
  
  
  // Don't use flags as function parameters
  
  function createFile(name) {
    fs.create(`./temp/${name}`);
  } 
  
  function createTempFile(name) {
    fs.create(name);
  }
  