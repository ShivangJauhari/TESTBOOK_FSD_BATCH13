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
        var postContent = document.createElement("div");
        postContent.classList.add("post-content");
        postContent.textContent = postTextArea.value;
        postDiv.appendChild(postContent);

       ///creating a like button for the post
        var likeButton = document.createElement("button");
        likeButton.textContent = "Like";
        likeButton.classList.add("like-button");
        postDiv.appendChild(likeButton);

        // creating a counter for the like button
        var likeCounter = document.createElement("span");
        likeCounter.textContent = "0";
        // Like counter id
        likeCounter.id = "like-counter";
        likeButton.appendChild(likeCounter);

        // Add event listener to the like button
        likeButton.addEventListener("click", function () {
            incrementCounter("like-counter");
        });

        // creating a comment button for the post
        var commentButton = document.createElement("button");
        commentButton.textContent = "Comment";
        commentButton.classList.add("comment-button");
        postDiv.appendChild(commentButton);

        // creating a counter for the comment button
        var commentCounter = document.createElement("span");
        commentCounter.textContent = "0";
        // Comment counter id
        commentCounter.id = "comment-counter";
        commentButton.appendChild(commentCounter);

        // Add event listener to the comment button
        commentButton.addEventListener("click", function () {
            incrementCounter("comment-counter");
            
        });

        // creating a share button for the post
        var shareButton = document.createElement("button");
        shareButton.textContent = "Share";
        shareButton.classList.add("share-button");
        postDiv.appendChild(shareButton);

        // creating a counter for the share button
        var shareCounter = document.createElement("span");
        shareCounter.textContent = "0";
        // Share counter id
        shareCounter.id = "share-counter";
        shareButton.appendChild(shareCounter);

        // Add event listener to the share button
        shareButton.addEventListener("click", function () {
            incrementCounter("share-counter");
           
        });   

        postTextArea.value = "";
        post.style.display = 'none';
        postDiv.style.display = 'block';

        // delete the appended post with text area and post button
        post.removeChild(postTextArea);
        post.removeChild(postButton);
    });

});

// function for incremneting the counter
function incrementCounter(counterId) {
    var counterElement = document.getElementById(counterId);
    var counterValue = parseInt(counterElement.textContent);
    counterValue++;
    counterElement.textContent = counterValue;
}


