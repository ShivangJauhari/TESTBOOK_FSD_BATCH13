// Create a paragraph element
var para = document.createElement("p");
para.id = "para";
para.textContent = "This is a paragraph";
document.body.appendChild(para);

// create form elements
var form = document.createElement("form");
form.id = "form";
var input = document.createElement("input");
input.id = "input";
input.type = "text";
input.placeholder = "Enter your name";
form.appendChild(input);
var submit = document.createElement("input");
submit.type = "submit";
submit.value = "Submit";
form.appendChild(submit);
document.body.appendChild(form);

