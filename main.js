console.log(document);

let h1 = document.createElement("h1");
document.body.appendChild(h1); 
h1.innerText = "Lab7 Assignment"; 
h1.style.color = "blue";

let h2 = document.createElement("h2");
document.body.appendChild(h2); 
h2.innerHTML = "<b>Task</b>"; 
h2.style.color = "red";


let a1 = document.createElement ("p"); 
document.body.appendChild(a1);
a1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";

let b1 = document.createElement ("p"); 
document.body.appendChild(b1);
b1.innerHTML = "find elements in the DOM (<b>5 points</b>);"; 
b1.style.color = "green";

let c1 = document.createElement ("p"); 
document.body.appendChild(c1);
c1.innerHTML = "create/add/remove elements (<b>5 points</b>);"; 
c1.style.color = "purple";

let d1 = document.createElement ("p"); 
document.body.appendChild(d1);
d1.innerHTML = "change content of the elements (<b>5 points</b>);"; 
d1.style.color = "green";

let e1 = document.createElement ("p"); 
document.body.appendChild(e1);
e1.innerHTML = "change styles of the elements (<b>5 points</b>);"; 
e1.style.color = "purple";

let f1 = document.createElement ("p"); 
document.body.appendChild(f1);
f1.innerHTML = "change attributes of the elements  (<b>5 points</b>);"; 
f1.style.color = "green";

let g1 = document.createElement ("p"); 
document.body.appendChild(g1);
g1.innerHTML = "change classes of the elements (<b>5 points</b>);"; 
g1.style.color = "purple";

let j1 = document.createElement ("h2"); 
document.body.appendChild(j1);
g1.innerHTML = "<b>Submission</b>"; 
g1.style.color = "red";
g1.style.fontSize = '24px';

let a2 = document.createElement ("p"); 
document.body.appendChild(a2);
a2.innerHTML = "To submit your work, follow these instructions:";

let b2 = document.createElement ("p"); 
document.body.appendChild(b2);
b2.innerHTML = "Create a new repository on Github, named <b> lab7 (1 point)</b>. "; 
b2.style.color = "green";

let c2 = document.createElement ("p"); 
document.body.appendChild(c2);
c2.innerHTML = "Clone this repository to your local machine and work inside it."; 
c2.style.color = "purple";

let d2 = document.createElement ("p"); 
document.body.appendChild(d2);
d2.innerHTML = "Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt;"; 
d2.style.color = "green";

let e2 = document.createElement ("p"); 
document.body.appendChild(e2);
e2.innerHTML = "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>)."; 
e2.style.color = "purple";

let f2 = document.createElement ("p"); 
document.body.appendChild(f2);
f2.innerHTML = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section)."; 
f2.style.color = "green"; 

let g2 = document.createElement ("p"); 
document.body.appendChild(g2);
g2.innerHTML = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>)."; 
g2.style.color = "purple";

let f3 = document.createElement ("p"); 
document.body.appendChild(f3);
f3.innerHTML = "After you finish your work, submit it to the Github (<b>2 points</b>)."; 
f3.style.color = "green"; 

console.log(document);