//Checklist need questions array and to plan out global vars
//User clicks start button
  //EventListner tied to start button
  //Button in html
  //When click a start quiz function is starts
    //1 starts a timer -- set interval w/ -- time displayed
    //2presents a question -
        //a first question is unhidden display none or hide onto start page (in both javaScript, html, css)
      //Questions in an array
//Check answer function tied to each set of questions that come up- will take the value- correct not correct- move to next question
    //If incorrect 10 sec removed from timer
    //When question is answered question i ++ presented with another question in array
    //if we reach end of timer or end of questions array fire quiz end function
    //Quiz end function need to clear the time interval will stop the set interval
    //Hide questions screen div
    //Unhide QuizDone screen includes input where you can submit your initials and my score to local storage (Score is how much time is left on clock)
  //EventListener on Submit window.localStorage.setitem button that fires a save to local storage- initials and score object to local storage object with values= highscore and initials
  //  Hide the local storage input page and unhide highscore page
    //locaStorage.getitem grab those local storage objects
    //Display those values on screen using .textContent
    //Add clear button that will clear out local storage
    //Go back button link to index

    var quizQuestionContainer = [
    
      {
          question: "Commonly used data types DO NOT include:",
          choice: ["strings", "booleans", "alerts", "number"],
          answer: "alerts" //alerts
        },
    
        {
          question: "The condition in an if / else statement is enclosed within _________.",
          choice: ["quotes", "curly brackets", "parentheses", "square brackets"],
          answer: "curly brackets" //parentheses
        },
    
        {
          question: "Arrays in JavaScript can be used to store ________.",
          choice: ["numbers and strings", "other arrays", "booleans", "all of the above"],
          answer: "all of the above" //all of the above
        },
    
        {
          question: "A very useful tool used during development and debugging for printing content to the debugger is:",
          choice: ["JavaScript", "terminal / bash", "for loops", "console.log"],
          answer: "console.log" //console.log
        },
      ]; 
var quizQuestionsIndex = 0; //This is saying start at the first question
var quizTime = quizQuestionContainer.length * 15; //creating the timer
var timerState; //holds all the time info and use it to be able to set interval and clear and interval
var timerEl = document.querySelector(".timer");
var introEl = document.querySelector(".intro");
var questionsEl = document.querySelector(".questions-answers");
var doneEl = document.querySelector(".quizDone");
var inputEl = document.querySelector(".input-group");
var highScoreEl = document.querySelector("highScoresListCard");
var startButton = document.querySelector (".startButton");
var submitButton = document/querySelector("#SubmitButton");







    /*Access the list of potential answers
var answerList =document.querySelector(".answersList");
//Creating a data box for question number
var questionNumber = 0;
//timer data box
var secondsLeft = 0;
//timer object id
var timerInterval;
//array to collect scores
var highScores = [];

var quizQuestionContainer = [
    
    {
        question: "Commonly used data types DO NOT include:",
        choice: ["strings", "booleans", "alerts", "number"],
        answer: 2 //alerts
      },
  
      {
        question: "The condition in an if / else statement is enclosed within _________.",
        choice: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: 2 //parentheses
      },
  
      {
        question: "Arrays in JavaScript can be used to store ________.",
        choice: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: 3 //all of the above
      },
  
      {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: 3 //console.log
      },
    ]; 
//add event listeners and show/hide necessary items
$(document).ready(function () 
{
  $(".startQuizButton").on("click", function () {  //listener for the start quiz button
    startQuiz();
  });

  $("#userInitials").on("click", function () { //hide last answer when user clicks in the text box
    clearPlayerInitialsTextBox();
  });

  $(".highScore").on("click", function () {  //listen for when the highscores link is clicked
    showHighScores();
  });

  $("#goBack").on("click", function () {  //listener for the start over button click
    startOver();   
  });

  $("#clearHighScores").on("click", function () {  //listener for the clear highscores button
    clearHighScores();
  });

  $("#userInitialsButton").on("click", function () {  //listener for the button that submits the plyers initials and score
    setUserScore();
  });

  bindQuestionButtons();  //call the function to listen for the choice button click
  loadHighScores();  //get the scores from local stroage
  setTimer();     //set the timer function
});

//display the proper div, start the timer and show the quesions
function startQuiz() {
    $(".intro").addClass("d-none"); //hide
    $(".question-answers").removeClass("d-none"); //show
    startTimer();
    questionNumber = 0;
    showQuestion();  //go to show questions function
  }

  //get the highscores from memory and load them into an array called highScoreArray
function loadHighScores() {
    var highScoresArray = localStorage.getItem(".highScores");
    if (highScoresArray) //if not undefined
    {
      highScores = JSON.parse(highScoresArray);  //make sure there is a highscores object
    }
    else {
      localStorage.setItem(".highScores", JSON.stringify(highScores));  //if not make one and store it to local storage
    }
  }

  //get the data-index of the button clicked and send it to the checkAnswer function to see if user is right or wrong
function quizListButton(event) {
  var button = event.target;  //get the button that was clicked
  var buttonIndex = $(button).attr("data-index"); //get the index of the button clicked
  buttonIndex = parseInt(buttonIndex, 10); //convert index to int
  checkAnswer(buttonIndex); //go to check answer function and pass it the index of the clicked button
}
//event for when a choice button is clicked
function bindQuestionButtons() 
{
  $(".answerList button").on("click", function (event) 
  {
    quizListButton(event); //send the object clicked to the quizlist button function
  });
}
//turn off event listener
function unBindQuestionButtons() 
{
  $(".answerList button").off();
}
//when the user clicked inside the initials text box, hide their last answer status
function clearPlayerInitialsTextBox() 
{
  $("#answer").addClass("d-none");
}
//make sure that all the divs are hidden no matter what the user is on and show the high scores div/
function showHighScores() 
{
  $(".card-header").addClass("d-none");
  $(".intro").addClass("d-none");
  $(".questions-answers").addClass("d-none");
  $(".quizDone").addClass("d-none");
  $(".highScoresList").removeClass("d-none");

  //function to render the questions on the screen
  function showQuestion() {
    
    if (questionNumber !== masterQuiz.length)
    {
      //get the question from the object masterQuiz based on the variable questionNumber to tell what question we are on  
      var question = masterQuiz[questionNumber].question;
      //set the h1 element questionContent to the question
      $(".questionContent").html(question);
      $(".answerStatus").addClass("d-none");  //hiding
  
      //array of choices
      var choices = masterQuiz[questionNumber].choice;
      var buttons = $(".answersList button"); //array of buttons from the ul
  
      for (var i = 0; i < choices.length; i++) 
      {
        var counter = i + 1;
        $(buttons[i]).html(counter + ". " + choices[i]);  //set the text of the button to the corresponding choice
      }
      buttons.prop('disabled', false);  //disable the buttons for clicking
    }
    else
    {
      stopTimer();
      $(".question-answers").addClass("d-none"); //hide the questions
      $(".quizDone").removeClass("d-none"); //show the All Done page
      $(".answerStatus").removeClass("d-none");     //show the last answer 
      $("#score").html(secondsLeft);
      questionNumber = 0;
    }
  }
  //event for when a choice button is clicked
function bindQuestionButtons() 
{
  $(".answerList button").on("click", function (event) 
  {
    quizListButton(event); //send the object clicked to the quizlist button function
  });
}
//turn off event listener
function unBindQuestionButtons() 
{
  $(".answerList button").off();
}