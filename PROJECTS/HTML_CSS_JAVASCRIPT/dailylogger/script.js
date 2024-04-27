// console log the message "Hello World" to the console
console.log("Hello World");

// function to display the current date and time    
function displayDateTime() {
    // get the current date and time
    let currentDateTime = new Date();
    // select an HTML element
    let dateTimeElement = document.getElementById('dateTime');
    // display the current date and time in the selected HTML element
    dateTimeElement.textContent = currentDateTime;
}

// call the function to display the current date and time

setInterval(displayDateTime, 1000);

//create the object to store the data of the user from userin.html form
let user = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: ''
};

// function to get the data from the user form
function getUserData() {
    // get the data from the user form
    user.firstName = document.getElementById('firstName').value;
    user.lastName = document.getElementById('lastName').value;
    user.email = document.getElementById('email').value;
    user.username = document.getElementById('username').value;
    user.password = document.getElementById('password').value;
    // display the data in the console
    console.log(user);
}

// function to display the data from the user form
function displayUserData() {
    // select an HTML element
    let userDataElement = document.getElementById('userData');
    // display the data in the selected HTML element
    userDataElement.textContent = JSON.stringify(user);
}

// create a object of log having properties of current date and time, edit, delete, create, display behaviors and list of logs with id

let log = {
    currentDateTime: '',
    logs: [],
    edit: function(id, newMessage) {
        this.logs[id] = newMessage;
    },
    delete: function(id) {
        this.logs.splice(id, 1);
    },
    create: function(message) {
        this.currentDateTime = new Date();
        this.logs.push({id: this.logs.length, message: message, dateTime: this.currentDateTime});
    },
    display: function() {
        console.log(this.logs);
    }
};

// add event listener to the the new log button
document.getElementById('newLog').addEventListener('click', getLogData);




// function to get the data from the log form
function getLogData() {
    
    // get the data from the log form
    let logMessage = document.getElementById('logMessage').value;
    // create a new log
    log.create(logMessage);
    // display the data in the console
    console.log(log);
}


// display the log key and values in the .log-container div
function displayLogs() {
    // select an HTML element
    let logElement = document.getElementById('log-container');
    // display the data in the selected HTML element
    logElement.textContent = JSON.stringify(log.logs);
}

// call the function to display the logs
displayLogs();









