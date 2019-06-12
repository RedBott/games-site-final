let randomInteger = Math.floor(Math.random() * Math.floor(1000000));

let lineBreak = document.createElement("br");
let horizontalLine = document.createElement("hr");
let content = document.createElement("h1");
content.innerHTML = `The random integer ${randomInteger} has arrived from index!`;

document.body.appendChild(horizontalLine);
document.body.appendChild(lineBreak);
document.body.appendChild(content);