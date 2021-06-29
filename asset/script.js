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
var submitButton = document.querySelector("#SubmitButton");

//Create a -- helper function
function setTimeMinus() {
  quizTime --;
  timerEl.textContent = quizTime;
    if (quizTime <= 0 ) {
      quizEnd() //show that div
    }

};
function startQuiz() {
  introEl.setAttribute("class" , "hide") //CSS property placing it in the class attri and placing on introel which hides it
  questionsEl.removeAttribute("class" , "hide")

  timerState = setInterval(setTimeMinus, 1000)// each time your timer goes down do it in each second 1000 = 1 second 3000 = 3 seconds
  timerEl.textContent = quizTime ///updating the browser
  cycleQuestions()
};


function cycleQuestions() {
console.log("cycling questions");
};
function checkAnswer () { //check answers and input time punishment stuff


};

function quizEnd() {
console.log("Quiz is over!")
};
function saveHighScore(){


};
startButton.onclick = startQuiz; /// addEventList












 