// variable decleration for the html file
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// function for adding task listcontainer with value input box value
function addTask(){
  if (inputBox.value === "") {
    alert("You must write something");
  } 
  else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }  
}, false);

// save to do list in the browser
function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

// show task previously saved
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();