// Exercise 1
const pTag = document.createElement("p");
pTag.textContent = "Hey I'm red!";
pTag.style.color = "red";
document.body.appendChild(pTag);

// Exercise 2
const h3Tag = document.createElement("h3");
h3Tag.textContent = "I'm a blue h3!";
h3Tag.style.color = "blue";
document.body.appendChild(h3Tag);

// Exercise 3
const divTag = document.createElement("div");
divTag.style.backgroundColor = "pink";
divTag.style.borderBlockStyle = "solid";
divTag.style.width = "20rem";
divTag.style.height = "20rem";
divTag.style.borderColor = "black";
document.body.appendChild(divTag);

const h1Tag = document.createElement("h1");
divTag.appendChild(h1Tag); 
h1Tag.textContent = "I'm in a div";

const pTagChild = document.createElement("p");
divTag.appendChild(pTagChild); 
pTagChild.textContent = "ME TOO!";

