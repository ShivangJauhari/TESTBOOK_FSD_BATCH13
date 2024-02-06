// creating user object
var user = {
    name: "John",
    age: 25,
    email: "",
    location: "India",
    friends: ["Rahul", "Rohit", "Raj"]
};

// creating image and name of user and appending it to the DOM
var userImage = document.createElement("img");
userImage.src = "images/7A.jpg";
userImage.alt = "user image";

var userName = document.createElement("h2");
userName.textContent = user.name;

// appending user image and name to the DOM in post conttainer
var postContainer = document.querySelector(".post-container");
postContainer.appendChild(userImage);
postContainer.appendChild(userName);

// create a button for writing a post
var writePostButton = document.createElement("button");
writePostButton.textContent = "Write a Post";

postContainer.appendChild(writePostButton);

// Add event listener to the write post button
var post = document.querySelector(".post");
writePostButton.addEventListener("click", function () {
    // create a text area for the user to write a post
    post.style.display = 'block';
    var postTextArea = document.createElement("textarea");
    postTextArea.placeholder = "Write a post...";
    post.appendChild(postTextArea);

    // creating a button to post the post
    var postButton = document.createElement("button");
        postButton.textContent = "Post";
        post.appendChild(postButton);


        // Add event listener to the post button
        postButton.addEventListener("click", function () {
        // creating a div to display the post
        var postDiv = document.querySelector(".post-display");
        var postContent = document.createElement("p");
        postContent.textContent = postTextArea.value;
        postDiv.appendChild(postContent);
        postTextArea.value = "";
        post.style.display = 'none';
        postDiv.style.display = 'block';

        // delete the appended post with text area and post button
        post.removeChild(postTextArea);
        post.removeChild(postButton);
    });

});

function incrementCounter(counterId) {
    var counterElement = document.getElementById(counterId);
    var counterValue = parseInt(counterElement.textContent);
    counterValue++;
    counterElement.textContent = counterValue;
}

