//The DOM (or Document Object Model) is a tree-like representation of the contents of a webpage 

const container = document.querySelector('#container');
// select the #container div 
console.dir(container.firstElementChild);                      
// select the first child of #container => .display
const controls = document.querySelector('.controls');   
// select the .controls div
console.dir(controls.previousElementSibling);                  
// selects the prior sibling => .display


//element.querySelector(selector) returns reference to the first match of selector
//element.querySelectorAll(selectors) returns a “nodelist” containing references to all of the matches of the selectors
//to convert nodelist to array we can use : Array.from() or the spread operator.
//------------------------------------------------------------------------------------------


//Create element
const div = document.createElement('div');

//Append Elements
//parentNode.appendChild(childNode) appends childNode as the last child of parentNode
//parentNode.insertBefore(newNode, referenceNode) inserts newNode into parentNode before referenceNode

//Remove Elements
//parentNode.removeChild(child) removes child from parentNode on the DOM and returns reference to child
//------------------------------------------------------------------------------------------



//Adding inline style
div.style.color = 'blue';                                      
// adds the indicated style rule
div.style.cssText = 'color: blue; background: white';          
// adds several style rules
div.setAttribute('style', 'color: blue; background: white');    
// adds several style rules
div.style.background-color // doesn't work - attempts to subtract color from div.style.background
div.style.backgroundColor // accesses the divs background-color style
div.style['background-color'] // also works
//------------------------------------------------------------------------------------------


//Editing Attributes
div.setAttribute('id', 'theDiv');                              
// if id exists update it to 'theDiv' else create an id with value "theDiv"
div.getAttribute('id');                                        
// returns value of specified attribute, in this case "theDiv"
div.removeAttribute('id');                                     
// removes specified attribute
//------------------------------------------------------------------------------------------


//Working with classes
div.classList.add('new');                                      
// adds class "new" to your new div
div.classList.remove('new');                                   
// remove "new" class from div
div.classList.toggle('active');                                
// if div doesn't have class "active" then add it, or if it does, then remove it
//------------------------------------------------------------------------------------------


//Adding text content
div.textContent = 'Hello World!' 
//Adding HTML content
div.innerHTML = '<span>Hello World!</span>';  
//------------------------------------------------------------------------------------------


//Button Events
//1 html
//<button onclick="alert('Hello World')">Click Me</button>
//2
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");
//3
btn.addEventListener('click', () => {
  alert("Hello World");
});

//html attributes
https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
//html dom events
https://www.w3schools.com/jsref/dom_obj_event.asp