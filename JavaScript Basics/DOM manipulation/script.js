const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

//question 1 
//a <p> with red text that says “Hey I’m red!”
const p = document.createElement('p')
p.textContent = 'Hey I’m red!'
p.style.color = 'red'
container.appendChild(p)

//question 2
//an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement('h3')
h3.textContent = 'I\’m a blue h3!'
h3.style.color = 'blue'
container.appendChild(h3)

/* question 3
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.
*/
const div = document.createElement('div')
div.setAttribute('style', 'border: black solid 1px; background: pink')

const h1 = document.createElement('h1')
h1.textContent = 'I\’m in a div'
div.appendChild(h1)

const para2 = document.createElement('p')
para2.textContent = 'that says \“ME TOO!\”'
div.appendChild(para2)

container.appendChild(div)