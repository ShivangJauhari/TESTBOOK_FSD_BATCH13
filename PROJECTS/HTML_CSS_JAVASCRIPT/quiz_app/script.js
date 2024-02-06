// Global variables
// Score counter
var score = 0;

// Total time taken
var totalTime = 0;

// Time taken for each question
var timePerQuestion = [];

// Attempted questions
var attemptedQuestions = 0;

// Wrong questions
var wrongQuestions = 0;

// Percentage
var percentage = 0;

// Questions array
var questions;

 //VAR FOR INDEX
 var index = 0;

// get the next button
var nextButton = document.getElementById("next-button");

// Add a click event listener to the next button
nextButton.addEventListener("click", displayNextQuestion);


function showCategory() {
    // Get the user-details and category elements
    var userDetails = document.getElementById("user-details");
    var category = document.getElementById("category");

    // Get the value of the user-name input field
    var userName = document.getElementById("user-name").value;

    // Check if the user-name input field is not empty
    if (userName.trim() !== "") {
        // If the user-name input field is not empty, hide the user-details element and show the category element
        userDetails.classList.add("hide");
        category.classList.remove("hide");
    } else {
        // If the user-name input field is empty, show an alert to the user
        alert("Please enter your name.");
    }
}

// Select all the buttons in the btn-grid category
var buttons = document.querySelectorAll("#btn-grid .btn");

// Iterate over each button
buttons.forEach(function(button) {
    // Add a click event listener to the button
    button.addEventListener("click", function() {
        // Call the startCategory function with the button's text as a parameter
        startCategory(button.textContent);
        console.log(button.textContent);
    });
});

function startCategory(categoryName) {

    // Hide the category section
    var categorySection = document.getElementById("category");
    categorySection.classList.add("hide");

    // Display the quiz-page section
    var quizPageSection = document.getElementById("quiz-page");
    quizPageSection.classList.remove("hide");

    // display the questions and handle the user's answers
    // based on the categoryName parameter
    
    switch (categoryName) {
        case "Probability":
            questions = probability;
            break;
        case "Pipes and Cisterns":
            questions = pipes_and_pisterns;
            break;
        case "Ratio and Proportion":
            questions = ratio_and_proportion;
            break;
        case "Profit and Loss":
            questions = profit_and_loss;
            break;
        default:
            console.error("Invalid category name: " + categoryName);
            return;
    }  
    startQuiz(questions);
};


// Start the quiz WITH COUNDOWN TIMER FOR 60 SECONDS FOR EACH QUESTION
function startQuiz(questions) {
 
    // Display the first question
    displayQuestion(questions[index]);
    // Start the timer
    startTimer();
}
// Display the question
function displayQuestion(question) {
    // Get the question element
    var questionElement = document.getElementById("question");

    // Get the options element
    var optionsElement = document.getElementById("options-grid");

    // Display the question number out of the total number of questions
    var questionNumberElement = document.getElementById("question-number");
    questionNumberElement.textContent = "Question: "+ (index + 1) + "/" + questions.length;



    // Display the question
    questionElement.textContent = question.question;

    // Clear the options
    optionsElement.innerHTML = "";

    // Display the options
    question.options.forEach(function(option, index) {
        // Create a button for each option
        var button = document.createElement("button");

        // Set the button's text content
        button.textContent = option;

        //Add a class to the button
        button.classList.add("btn-1");

        // Add a click event listener to the button
        button.addEventListener("click", function() {
            // Check if the answer is correct
            if (index === question.answer) {
                // If the answer is correct, increment the score
                score++;
                // Display the score
                displayScore();
                
            }
            else {
                
                // Increment the wrong questions
                wrongQuestions++;
            }
            // show the incorrect and correct options
            var options = document.querySelectorAll("#options-grid .btn-1");
            options.forEach(function(option) {
                if (option.textContent === question.options[question.answer]) {
                    option.classList.add("correct");
                }
                else {
                    option.classList.add("wrong");
                }
            });
            // diSAble the options
            
            options.forEach(function(option) {
                option.disabled = true;
            });
            // time taken for each question
            timePerQuestion.push(60 - seconds);

            // Increment the attempted questions
            attemptedQuestions++;
  });

        // Add the button to the options element
        optionsElement.appendChild(button);
    });
}

// Display the score
function displayScore() {
    // Get the score element
    var scoreElement = document.getElementById("score-value");

    // Display the score
    scoreElement.textContent = score;
}

// START THE TIMER
var seconds = 60;
var timer;
function startTimer() {
    // Get the timer element
    var timerElement = document.getElementById("timer-value");

    // Display the initial value of seconds
    timerElement.textContent = seconds;

    // Start the timer
    timer = setInterval(function() {
        // Decrement the seconds
        seconds--;

        // Display the seconds
        timerElement.textContent = seconds;

        // Check if the seconds are 0
        if (seconds === 0) {
            // If the seconds are 0, stop the timer
            stopTimer();

            // timerPerQuestion.push(60);
            timePerQuestion.push(60);

            // Increment the wrong questions
            wrongQuestions++;

            // Increment the attempted questions
            attemptedQuestions++;

            // Display the next question
            displayNextQuestion();
        }
    }, 1000);
}

// STOP THE TIMER
function stopTimer() {
    // Stop the timer
    clearInterval(timer);
    // Reset the seconds
    seconds = 60;
   
}

// Display the next question by incrementing the index
function displayNextQuestion() {
    // Check if the index is less than the length of the questions array
    if (index < questions.length - 1) {
        // If the index is less than the length of the questions array, increment the index
        index++;
        // Display the question
        displayQuestion(questions[index]);
        // Reset the timer
        stopTimer();
        startTimer();
    } else {
        // If the index is equal to the length of the questions array, display the result
        displayResult();
    }
}

// nExT button to display the NEXT QUesTIOn
var nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", displayNextQuestion);

// Display the result
function displayResult() {
    // Hide the quiz-page section
    var quizPageSection = document.getElementById("quiz-page");
    quizPageSection.classList.add("hide");

    // Display the result section
    var resultSection = document.getElementById("quiz-result");
    resultSection.classList.remove("hide");

      // Display the timePerQuestion array in the console
      console.log("TME PER QUESTION "+timePerQuestion);

    // Calculate the total time taken
    totalTime = timePerQuestion.reduce(function(total, time) {
        return total + time;
    }, 0);
    

    // Calculate the percentage
    percentage = (score / questions.length) * 100;
    //calculate the correct answer

    correctAnswer = score;
    // calculate the attempted questions
    attemptedQuestions = score + wrongQuestions;

    //calulate the worng questions
    wrongQuestions = questions.length - score;

    // Display the score
    displayScore();

    // Display the total time taken
    displayTotalTime();

    // Display the wrong questions
    displayWrongQuestions();

    // Display the percentage
    displayPercentage();

    // displAY THE CORRECT ANSWER
    displayCorrectAnswer();

    // display the attempted questions
    displayAttemptedQuestions();

    // display the name of the user
    displayName();

    // Display the total questions
    displayTotalQuestions()

    // Display the time taken for each question
    displayTimePerQuestion();
} 

// Display the total time taken
function displayTotalTime() {
    // Get the total-time element
    var totalTimeElement = document.getElementById("total-time");
    // Display the total time taken
    totalTimeElement.textContent = totalTime;
    console.log("TOTAL TIME "+totalTime);
}

// Display the wrong questions
function displayWrongQuestions() {
    // Get the wrong-questions element
    var wrongQuestionsElement = document.getElementById("wrong-questions");
    // Display the wrong questions
    wrongQuestionsElement.textContent = wrongQuestions;
    console.log("WRONG QUES"+wrongQuestions);
}

// Display the percentage 
function displayPercentage() {
    // Get the percentage element
    var percentageElement = document.getElementById("score-percentage");
    // Display the percentage
    percentageElement.textContent = percentage;
    console.log("PERCENTAGE "+percentage);
} 
// display the correct answer
function displayCorrectAnswer() {
    // Get the correct-answer element
    var correctAnswerElement = document.getElementById("correct-questions");
    // Display the correct answer
    correctAnswerElement.textContent = correctAnswer;
    console.log("CORRECT"+correctAnswer);
}
// display attempted questions
function displayAttemptedQuestions() {
    // Get the attempted-questions element
    var attemptedQuestionsElement = document.getElementById("attempted");
    // Display the attempted questions
    attemptedQuestionsElement.textContent = attemptedQuestions;
    console.log("ATTEMPTED "+attemptedQuestions);
}

// display the name of the user
function displayName() {
    // Get the name element
    var nameElement = document.getElementById("participant-name");
    // GET THE USER NAME
    var userName = document.getElementById("user-name").value;
    // display the name
    nameElement.textContent = userName;
    console.log("USER NAME"+userName);

}

//display the total questions
function displayTotalQuestions() {
    // Get the total-questions element
    var totalQuestionsElement = document.getElementById("total-questions");
    // Display the total questions
    totalQuestionsElement.textContent = questions.length;
    console.log("QUES LEN" +questions.length);
}

// Display the time taken for each question
function displayTimePerQuestion() {
    // Get the time-per-question element
    var timePerQuestionElement = document.getElementById("time-per-question");
    // Display the time taken for each question
    timePerQuestionElement.textContent = timePerQuestion;
    console.log("TIME PER QUES "+timePerQuestion);
}


//restart the quiz
function restartQuiz() {
    // Hide the result section
    var resultSection = document.getElementById("quiz-result");
    resultSection.classList.add("hide");

    // Display the category section
    var categorySection = document.getElementById("category");
    categorySection.classList.remove("hide");

    // Reset the score
    score = 0;

    // Reset the index
    index = 0;

    // Reset the attempted questions
    attemptedQuestions = 0;

    // Reset the wrong questions
    wrongQuestions = 0;

    // Reset the percentage
    percentage = 0;

    // Reset the total time taken
    totalTime = 0;

    // Reset the time taken for each question
    timePerQuestion = [];

    //reset the correct answer
    correctAnswer = 0;

    //reswt the time
    seconds = 60;

    

}

// Go to home function
function goToHome() {
    // Hide the result section
    var resultSection = document.getElementById("quiz-result");
    resultSection.classList.add("hide");

    // Display the user-details section
    var userDetails = document.getElementById("user-details");
    userDetails.classList.remove("hide");

    // Reset the score
    score = 0;

    // Reset the index
    index = 0;

    // Reset the attempted questions
    attemptedQuestions = 0;

    // Reset the wrong questions
    wrongQuestions = 0;

    // Reset the percentage
    percentage = 0;

    // Reset the total time taken
    totalTime = 0;

    // Reset the time taken for each question
    timePerQuestion = [];

   // reset the correct answer
    correctAnswer = 0;

    //reset the time
    seconds = 60;

    // reset the name 
    var userName = document.getElementById("user-name").value = "";
}






 
 



// Question variables as arrays
const pipes_and_pisterns = [
    {
        "id": 2,
        "answer": 0,
        "options": [
          "12",
          "15",
          "20",
          "18"
        ],
        "question": "Pipe A and Pipe B can fill a tank in 20 minutes and 10 minutes respectively. Pipe C can empty the tank in 15 minutes.  If the three pipes are opened simultaneously, find the time taken to fill the tank.",
        "solution": "When all pipes are opened simultaneously, \npart of tank filled in 1 minute = (1/20)+(1/10)-(1/15) = 1/12\nTime taken to fill the tank = 12 minutes"
      },
      {
        "id": 3,
        "answer": 2,
        "options": [
          "7 liters",
          "5 liters",
          "3.5 liters",
          "2.5 liters"
        ],
        "question": "Pipes P and Q can empty a tank in 1 hr and 1.5 hrs respectively. Pipes R and S can fill a tank in 2 hrs and 2.5 hrs respectively. The tank is filled to its capacity of 15 liters and all four pipes are opened simultaneously. How much water remains in the tank after an hour? ",
        "solution": "Part of tank emptied by P in an hour \n= 1\nPart of tank emptied by Q in an hour \n= 1/1.5 = 2/3\nPart of tank filled by R in an hour \n= ½\nPart of tank filled by S in an hour \n= 1/2.5 = 2/5\nPart of tank emptied in an hour = (1+(2/3))-( ½ +(2/5)) = 23/30\n\nWater remaining in the tank = 15*7/30 = 3.5 liters"
      },
      {
        "id": 4,
        "answer": 1,
        "options": [
          "180 minutes",
          "167 minutes",
          "200 minutes",
          "178 minutes"
        ],
        "question": "Three pipes, A, B, & C are attached to a tank. A & B can fill it in 20 & 30 minutes respectively while C can empty it in 15 minutes. If A, B & C are kept open successively for 1 minute each, how soon will the tank be filled?",
        "solution": "Part of the tank filled in 3 minutes \n= (1/20)+(1/30)-(1/15) \n= 1/60\nPart filled in 165 minutes \n= (165/3)*(1/60) \n= 55/60\nPart filled in 167 minutes \n= (55/60)+(1/20)+(1/30) \n= 60/60 =1\nThe tank is filled in 167 minutes."
      },
      {
        "id": 5,
        "answer": 3,
        "options": [
          "30 minutes",
          "45 minutes",
          "40 minutes",
          "25 minutes"
        ],
        "question": "Pipe A and Pipe B can fill a tank in 1 hour and 1 ¼ hours respectively. Both pipes are opened in the beginning and after some time, pipe B is closed. The tank is filled in 40 minutes. Pipe B was closed after",
        "solution": "Part of tank filled by A in a minute \n= 1/60 \nPart of tank filled by B in a minute \n= 1/75\nLet pipe B be closed after x minutes.\n\nPart of tank filled in x minutes \n= x*[(1/60)+(1/75)] \n= 9x/300 \nPart of tank filled in (40-x) minutes \n= [(40-x)*(1/60)] \n= (40-x)/60\n\n(9x/300) + ((40-x)/60) = 1\n4x = 100\nx = 25"
      },
      {
        "id": 6,
        "answer": 2,
        "options": [
          "60 minutes",
          "40 minutes",
          "30 minutes",
          "20 minutes"
        ],
        "question": "Two pipes A and B can fill a tank in 20 minutes when opened simultaneously. If pipe A alone takes 60 minutes to fill the tank, how much time will pipe B alone take to fill the tank?",
        "solution": "Let B take x minutes to fill the tank.\n\nPart of the tank filled by A and B \n= (1/60) + (1/x) = (1/20)\nSolving this, x=30"
      },
      {
        "id": 7,
        "answer": 3,
        "options": [
          "10 minutes",
          "7/6 hours",
          "6/7 hours",
          "7 hours"
        ],
        "question": "A pipe can fill a tank in an hour. Because of a leak, it took 1 hour and 10 minutes to fill the tank. Find the time taken by the leak to drain all the water in the tank.",
        "solution": "Let the leak take x hours to drain the tank.\n\n1 hr 10 min = 1+(1/6) = 7/6 hrs\n\n1-(1/x) = 1/(7/6) = 6/7\n\nPart of tank leaked in an hour = 1-6/7 = 1/7\n\nThe leak takes 7 hours to drain all the water."
      },
      {
        "id": 8,
        "answer": 1,
        "options": [
          "6 minutes",
          "12 minutes",
          "12.5 minutes",
          "24 minutes"
        ],
        "question": "Two taps A and B can fill a bathtub in 10 minutes and 15 minutes respectively. If A was open for the first two minutes, B for the next two minutes and so on, the bathtub is filled in",
        "solution": "Part of the tub filled in the first 2 minutes \n= 2*1/10 = 1/5\nPart of the tub filled in the next 2 minutes \n= 2*1/15 = 2/15\nPart of the filled in 4 minutes \n= (1/5) + (2/15) = 1/3\nTime required to fill the tub \n= 3*4 = 12 minutes"
      },
      {
        "id": 9,
        "answer": 0,
        "options": [
          "7 minutes",
          "14 minutes",
          "3.5 minutes",
          "28 minutes"
        ],
        "question": "A tank has three inlets A, B and C. C takes twice the time taken by A to fill the tank and B takes half the time taken by A to fill the tank. If they can fill the tank together in 4 minutes, find the time taken by B to fill the tank.",
        "solution": "Let A take x minutes to fill the tank.\n\n(1/x) + (1/(x/2)) + (1/2x) = 1/4\n\n(7/2x) = ¼\n\nx = 14\nx/2 = 7"
      },
      {
        "id": 10,
        "answer": 2,
        "options": [
          "480 liters",
          "360 liters",
          "300 liters",
          "240 liters"
        ],
        "question": "An inlet pipe fills a tank at the rate of 5 litres of water a minute. An outlet connected to the tank can empty a full tank in 5 hours. Both the pipes are opened together for 30 minutes and then, the outlet is closed. It took another 36 minutes to fill the tank. Find the capacity of the tank.",
        "solution": "Let the inlet pipe take x minutes to fill the tank.\n\nPart of the tank filled by the inlet in a minute \n= (1/x)\nPart of the tank emptied by the outlet in a minute \n= 1/(5*60) = 1/300\nPart of the tank filled in the first 30 minutes \n= 30*[(1/x)-(1/300)] \n= (300-x)/10x\nPart of the tank filled in the next 36 minutes \n= 36*(1/x) \n\n1 - [(300-x)/10x] = 36/x\n\nSolving, x = 60\nCapacity of the tank = 60*5 = 300 liters"
      },
      {
        "id": 11,
        "answer": 0,
        "options": [
          "10 hours",
          "5 hours",
          "9 hours",
          "6 hours"
        ],
        "question": "Pipe A fills a tank at the rate of 5 litre every hour. Pipe B fills another tank at a rate of 1 litre in the first hour, 2 litres in the second hour, 3 in the third and so on. After how many hours will the volume of water contained in the two tanks be equal?",
        "solution": "Let the water contained in the tanks be equal after x hours.\n\n5x=1+2+3+...+x\n\n5x = x(x+1)/2\n\nx=9 hours"
      },
];


const probability = [
    {
        "id": 2,
        "answer": 3,
        "options": [
          "5/1326",
          "2/663",
          "8/1326",
          "8/663"
        ],
        "question": "From an ordinary pack of cards, two cards are drawn out at random. Find the probability that they consist of a king and a queen.",
        "solution": "n(S) = 52C2 = 52*51/2 = 1326\n\nn(E) = 4C1*4C1 = 16\n\nP(E) = 16/1326 = 8/663"
      },
      {
        "id": 3,
        "answer": 2,
        "options": [
          "5/18",
          "1/6",
          "5/36",
          "7/36"
        ],
        "question": "A and B throw a dice. Find the probability that the sum of their throws is 6.",
        "solution": "n(S) = 36\n\nE = {(1,5),(2,4),(3,3),(4,2),(5,1)}\n\nn(E) = 5\n\nP(E) = 5/36"
      },
      {
        "id": 4,
        "answer": 2,
        "options": [
          "1/4",
          "5/8",
          "3/8",
          "3/4"
        ],
        "question": "Three coins are tossed. Find the probability of getting two heads and a tail.",
        "solution": "S={HHH,HHT,HTH,HTT,THH,TTH,THT,TTT}\nn(S) = 8\nE = {HHT,HTH,THH}\nn(E) = 3\nP(E) = 3/8"
      },
      {
        "id": 5,
        "answer": 2,
        "options": [
          "1/4",
          "1/32",
          "1/16",
          "1/5"
        ],
        "question": "Out of 5 children, the eldest is a girl. Find the probability that the rest are boys.",
        "solution": "Probability of a boy = 1/2\n\nP(the remaining 4 are boys) \n= (1/2)*(1/2)*(1/2)*(1/2) = 1/16"
      },
      {
        "id": 6,
        "answer": 0,
        "options": [
          "1/4",
          "2/9",
          "1/6",
          "1/5"
        ],
        "question": "Two dice are thrown simultaneously. Find the probability of getting a prime number on both the dice.",
        "solution": "n(S) = 36\n\nE = {(2,2),(2,3),(2,5),(3,2),(3,3),(3,5),(5,2),(5,3),(5,5)}\n\nn(E) = 9\n\nP(E) = 9/36 = 1/4"
      },
      {
        "id": 7,
        "answer": 3,
        "options": [
          "2/13",
          "1/13",
          "4/13",
          "3/13"
        ],
        "question": "A card is drawn at random from a pack of well-shuffled cards. What is the probability that the card is a face card?",
        "solution": "There are 3 face cards in each suit. \n\nHence, a total of 12 face cards in a pack.\n\nP(E) = 12/52 = 3/13"
      },
      {
        "id": 8,
        "answer": 1,
        "options": [
          "1/8",
          "7/8",
          "5/8",
          "3/4"
        ],
        "question": "What is the probability of getting at most two tails in tossing three fair coins?",
        "solution": "Probability of getting three tails \n= 1/8\nProbability of getting atmost two tails \n= 1-(1/8) = 7/8"
      },
      {
        "id": 9,
        "answer": 0,
        "options": [
          "17/42",
          "5/42",
          "15/42",
          "7/42"
        ],
        "question": "Three balls are drawn out at random from a bag containing 4 red balls and 5 yellow balls. What is the probability of getting at least two red balls?",
        "solution": "n(S) = 9C3 = (9*8*7)/(3*2*1) = 84\n\nn(E) = No. of ways of drawing 2 red balls and 1 yellow ball+ \nNo. of ways of drawing 3 red balls\n        = (4C2*5C1) + (4C3) = 34\n\nP(E) = 34/84 = 17/42"
      },
      {
        "id": 10,
        "answer": 1,
        "options": [
          "1/2",
          "1/3",
          "1/4",
          "1/6"
        ],
        "question": "Two fair dice are thrown. What is the probability of getting a sum that is a multiple of 3?",
        "solution": "n(S) = 36\n\nE = {(1,2),(1,5),(2,1),(2,4),(3,3),(3,3),(4,2),(4,5),(5,1),(5,4),(6,3),(6,6)}\n\nn(E) = 12\n\nP(E) = 12/36 = 1/3"
      },
      {
        "id": 11,
        "answer": 2,
        "options": [
          "1/4",
          "1/13",
          "4/13",
          "17/52"
        ],
        "question": "The probability that a card drawn from a pack will be a queen or a spade is",
        "solution": "n(S) = 52\n\nn(E) = No. of spades + No. of queens in other suits \n        = 13+3 = 16\nP(E) = 16/52 = 4/13"
      },
];

const ratio_and_proportion = [
    {
        "id": 2,
        "answer": 1,
        "options": [
          "48",
          "42",
          "60",
          "70"
        ],
        "question": "A class has 90 students. If the ratio of boys and girls is 7:8, find the number of boys in the class.",
        "solution": "7x+8x=90\n15x=90\nx=6\n\nNumber of boys=7x=42"
      },
      {
        "id": 3,
        "answer": 0,
        "options": [
          "54 cm",
          "27 cm",
          "12 cm",
          "15 cm"
        ],
        "question": "The length and breadth of a rectangle are in the ratio 5:4. Find its perimeter if its area is 180 cm².",
        "solution": "Let the length and breadth be 5x cm and 4x cm.\n5x*4x=180\n20x²=180\nx²=9\nx=3\nLength = 15cm\nBreadth = 12cm\n\nPerimeter\n= 2(l+b)\n= 2*27\n= 54 cm"
      },
      {
        "id": 4,
        "answer": 1,
        "options": [
          "9",
          "15",
          "25",
          "50"
        ],
        "question": "Find the mean proportion between 5 and 45.",
        "solution": "5:x::x:45\n\nx²=45*5 = 225\nx=15"
      },
      {
        "id": 5,
        "answer": 2,
        "options": [
          "63",
          "31",
          "21",
          "27"
        ],
        "question": "Find the fourth proportion to 3, 7 and 9.",
        "solution": "3:7::9:x\n\n3x=7*9=63\n\nx=21"
      },
      {
        "id": 6,
        "answer": 0,
        "options": [
          "4",
          "6",
          "3",
          "2"
        ],
        "question": "The sum of cubes of two numbers is 280. If the numbers are in the ratio 2:3, find the smallest number.",
        "solution": "Let the numbers be 2x and 3x.\n(2x)³+(3x)³=280\n8x³+27x³=280\n35x³=280\nx³=8\nx=2\nThe numbers are 4 and 6."
      },
      {
        "id": 7,
        "answer": 2,
        "options": [
          "8",
          "6",
          "12",
          "18"
        ],
        "question": "The sum of squares of three numbers is 280. If the numbers are in the ratio 3:5:6, find the greatest number.",
        "solution": "Let the numbers be 3x,5x and 6x.\n(3x)²+(5x)²+(6x)²=280\n9x²+25x²+36x²=280\n70x²=280\nx²=4\nx=2\n\nThe greatest number is 6x=12."
      },
      {
        "id": 8,
        "answer": 1,
        "options": [
          "18",
          "15",
          "12",
          "5"
        ],
        "question": "Solve for x\n2x:25 = 6:(x/3)",
        "solution": "2x/25 = 6/(x/3)\n2x/25 = 18/x\n2x*x = 18*25\nx² = 9*25\nx=3*5\nx=15"
      },
      {
        "id": 9,
        "answer": 1,
        "options": [
          "31",
          "30",
          "21",
          "45"
        ],
        "question": "Pooja, Amanda and Sherin divide 93 chocolates between them in the ratio (1/2):(1/3):(1/5). How many chocolates did Amanda get?",
        "solution": "(1/2):(1/3):(1/5)\n= (15/30):(10/30):(6/30)\n= 15:10:6\nAmanda's share\n= [10/(15+10+6)]*93\n= [10/31]*93\n= 30"
      },
      {
        "id": 10,
        "answer": 2,
        "options": [
          "32:35",
          "67:56",
          "5:14",
          "5:7"
        ],
        "question": "X, Y and Z are quantities of the same kind such that X:Y=5:8 and Y:Z=4:7. Find X:Z.",
        "solution": "X:Z=(X:Y)*(Y:Z)\n      =(5:8)*(4:7)\n      = (5/8)*(4/7)\n      = 5/14"
      },
      {
        "id": 11,
        "answer": 1,
        "options": [
          "4:7",
          "3:1",
          "5:3",
          "3:2"
        ],
        "question": "A box containing a dozen apples is opened and a few of the apples are found to be rotten. Which of the following may be the ratio of fresh apples to rotten apples?",
        "solution": "Let X and Y be the number of fresh apples and rotten apples.\nX+Y=12\nRatio = X:Y\n\nIf the ratio simplifies to a:b,\na+b has to be a factor of 12.\n\n3+1=4 is a factor of 12. Hence (B) can be the ratio."
      },
];

const profit_and_loss = [
    {
        "id": 2,
        "answer": 2,
        "options": [
            "10%",
            "5%",
            "20%",
            "12%"
        ],
        "question": "I bought 10 pencils for Rs.50 and sold them for Rs.60. What is my gain %?",
        "solution": "Gain % = (gain/C.P) * 100 = 20%"
    },
    {
        "id": 3,
        "answer": 2,
        "options": [
            "25%",
            "40%",
            "50%",
            "60%"
        ],
        "question": "A man sells an article at a profit of 20%. If he had bought it for 20% less but sells at the same price, find the gain %.",
        "solution": "Let the C.P be Rs.x\nS.P=1.2x\n\nIf he had bought it for 20% less, C.P = 0.8x\n\nGain = 0.4x\nGain% = (0.4x/0.8x) * 100 = 50%"
    },
    {
        "id": 4,
        "answer": 1,
        "options": [
            "5%",
            "5(5/19)%",
            "4(5/19)%",
            "5(10/19)%"
        ],
        "question": "A shopkeeper sells his goods at the cost price but uses a false weight of 950 gm. Find his gain %.",
        "solution": "Let the cost of 1 kg of goods be Rs.100. \nThe cost of 950g is Rs. 95.\n\nHe sells Rs.95 worth goods for Rs.100. \nGain = Rs.5\nC.P = Rs.95\n\nGain % = (5/95) * 100 = 5(5/19)%"
    },
    {
        "id": 5,
        "answer": 2,
        "options": [
            "20%",
            "15%",
            "12.5%",
            "10%"
        ],
        "question": "A shopkeeper sells a bag at a gain of 25%. He offers a discount of 10% on the bag. What is his profit %?",
        "solution": "Let the C.P of the bag be Rs.x\nS.P = 1.25x\n\nAfter discount, the selling price is \n0.9*1.25x = 1.125x\n\nGain % = ((1.125x-x)/x)*100 = 12.5%"
    },
    {
        "id": 6,
        "answer": 0,
        "options": [
            "Rs.16",
            "Rs.18",
            "Rs.10",
            "Rs.8"
        ],
        "question": "A man bought 10 apples and 8 oranges for Rs.200 and sold them for Rs.212. If he gained 12.5% on the apples and lost 20% on the oranges. Find the cost of an apple.",
        "solution": "Let the cost of an apple be Rs.x and the cost of an orange be Rs.y\n\nThe S.P of an apple is Rs.1.125x and the S.P of an orange is Rs.0.8y\n\n10x+8y=200\n10*(1.125x)+8*(0.8y)=212\n\nSolving these, x=16"
    },
    {
        "id": 7,
        "answer": 3,
        "options": [
            "25%",
            "20%",
            "15%",
            "10%"
        ],
        "question": "John buys a second-hand car for Rs.1,80,000 and spent Rs.20,000 for repairing it. He sold it for Rs.2,20000. Find his gain %.",
        "solution": "C.P = 180000+20000 = 200000\nS.P = 220000\n\nGain %=((220000-200000)/200000) * 100 = 10%"
    },
    {
        "id": 8,
        "answer": 3,
        "options": [
            "5%",
            "10%",
            "15%",
            "25%"
        ],
        "question": "12 articles were sold at the cost price of 15 articles. Find the profit %.",
        "solution": "Let the C.P of an article be Rs.x\n\nS.P = 15x/12 = 1.25x\n\nGain % = ((1.25x-x)/x)*100 = 25%"
    },
    {
        "id": 9,
        "answer": 0,
        "options": [
            "100%",
            "75%",
            "50%",
            "25%"
        ],
        "question": "The gain triples when the selling price of an item is doubled. Find the gain %.",
        "solution": "Let the C.P be Rs.x and the S.P be Rs.y. \n\nGain = y-x\n\n2y-x = 3*(y-x)\ny=2x\n\nGain = y-x = 2x-x = x\n\nGain % = (x/x)*100 = 100%"
    },
    {
        "id": 10,
        "answer": 1,
        "options": [
            "Rs.20",
            "Rs.21",
            "Rs.24",
            "Rs.25"
        ],
        "question": "A shopkeeper bought 60 apples at the rate of Rs.240 per dozen. For how much should he sell an apple in order to gain 5%?",
        "solution": "C.P of an apple \n= 240/12 = Rs.20\nGain % = ((S.P-20)/20) * 100 = 5%\n\nS.P=Rs.21"
    },
    {
        "id": 11,
        "answer": 3,
        "options": [
            "40%",
            "45%",
            "50%",
            "56.25%"
        ],
        "question": "Tarun bought 10 toffees for Rs.8 and sold 8 toffees for Rs.10. Find his gain percent.",
        "solution": "C.P = 8/10 = Rs.0.8\nS.P = 10/8 = Rs.1.25\n\nGain = 0.45\n\nGain = (0.45/0.8) * 100 = 56.25%"
    },
];