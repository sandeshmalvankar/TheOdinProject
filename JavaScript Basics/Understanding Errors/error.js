//Types of error
//1. Syntax 
//2. Reference
//3. Type

//Uncaught SyntaxError
//if we dont initialise variable
try {
    throw new SyntaxError('Hello', 'someFile.js', 10);
  } catch (e) {
    console.error(e instanceof SyntaxError); // true
    console.error(e.message);                // Hello
    console.error(e.name);                   // SyntaxError
    console.error(e.fileName);               // someFile.js
    console.error(e.lineNumber);             // 10
    console.error(e.columnNumber);           // 0
    console.error(e.stack);                  // @debugger eval code:3:9
  }

//Uncaught ReferenceError 
//if we try to access variable that is not defined
try {
    throw new ReferenceError('Hello', 'someFile.js', 10)
  } catch (e) {
    console.log(e instanceof ReferenceError)  // true
    console.log(e.message)                    // "Hello"
    console.log(e.name)                       // "ReferenceError"
    console.log(e.fileName)                   // "someFile.js"
    console.log(e.lineNumber)                 // 10
    console.log(e.columnNumber)               // 0
    console.log(e.stack)                      // "@Scratchpad/2:2:9\n"
  }

//stack trace - see in the console
const a = 5;
const b = 10;
function add() {
  return c;
}
function print() {
  add();
}
print();


//Type Error - In following cases we will get type error
//1. an operand or argument passed to a function is incompatible with the type expected by that operator or function;
//2. when attempting to modify a value that cannot be changed;
//3. when attempting to use a value in an inappropriate way.
const message = str1.push(str2); //push is not a string function, so we will get type error here

try {
    throw new TypeError('Hello', "someFile.js", 10)
  } catch (e) {
    console.log(e instanceof TypeError)  // true
    console.log(e.message)               // "Hello"
    console.log(e.name)                  // "TypeError"
    console.log(e.fileName)              // "someFile.js"
    console.log(e.lineNumber)            // 10
    console.log(e.columnNumber)          // 0
    console.log(e.stack)                 // "@Scratchpad/2:2:9\n"
  }