// adding a variable for the current date and time
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;


// create a log object having properties of date, time, log with log number and having behavior of creating a new log, updating a log and deleting a log

var log = {
    date: dateTime,
    log: [],
    logNumber: 0,
    createLog: function(logText){
        this.logNumber++;
        this.log.push({id: this.logNumber, logText: logText});
    },
    updateLog: function(logId, logText){
        for(var i = 0; i < this.log.length; i++){
            if(this.log[i].id === logId){
                this.log[i].logText = logText;
            }
        }
    },
    deleteLog: function(logId){
        for(var i = 0; i < this.log.length; i++){
            if(this.log[i].id === logId){
                this.log.splice(i, 1);
            }
        }
    }
}


// create  a textarea element field to enter the log text
var logText = document.createElement("textarea");
logText.setAttribute("id", "logText");
logText.setAttribute("rows", "4");
logText.setAttribute("cols", "50");
logText.setAttribute("placeholder", "Enter your log here");
document.body.appendChild(logText);

// create a button to create a log
var createLogButton = document.createElement("button");
createLogButton.innerHTML = "Create Log";
document.body.appendChild(createLogButton);

// create a button to update a log
var updateLogButton = document.createElement("button");
updateLogButton.innerHTML = "Update Log";
document.body.appendChild(updateLogButton);

// create a button to delete a log
var deleteLogButton = document.createElement("button");
deleteLogButton.innerHTML = "Delete Log";
document.body.appendChild(deleteLogButton);

// create a button to display the log
var displayLogButton = document.createElement("button");
displayLogButton.innerHTML = "Display Log";
document.body.appendChild(displayLogButton);


// add event listener to the create log button and link it to the create log function of the log object

createLogButton.addEventListener("click", function(){
    var logTextValue = document.getElementById("logText").value;
    log.createLog(logTextValue);
    console.log(log);
});

// add event listener to the update log button and link it to the create log function of the log object

updateLogButton.addEventListener("click", function(){
    var logTextValue = document.getElementById("logText").value;
    var logId = prompt("Enter the log id to update");
    log.updateLog(parseInt(logId), logTextValue);
    console.log(log);
});

// add event listener to the delete log button and link it to the create log function of the log object

deleteLogButton.addEventListener("click", function(){
    var logId = prompt("Enter the log id to delete");
    log.deleteLog(parseInt(logId));
    console.log(log);
});

// add event listener to the display log button and add log objects keys and values to the html by creating a div element and appending it to the body

var logDisplay = document.createElement("div");
logDisplay.setAttribute("id", "logDisplay");
document.body.appendChild(logDisplay);

var logDisplayText = document.createElement("p");
logDisplayText.innerHTML = "Date: " + log.date;
logDisplay.appendChild(logDisplayText);

var logDisplayText = document.createElement("p");
logDisplayText.innerHTML = "Logs: ";
logDisplay.appendChild(logDisplayText);

for(var i = 0; i < log.log.length; i++){
    var logDisplayText = document.createElement("p");
    logDisplayText.innerHTML = "Log " + log.log[i].id + ": " + log.log[i].logText;
    logDisplay.appendChild(logDisplayText);
}




displayLogButton.addEventListener("click", function(){
    console.log(log);
});





//log the log object in the console
console.log(log);