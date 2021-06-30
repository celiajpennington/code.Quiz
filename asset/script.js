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

//This is my quiz question array I will go through to check answers

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

      //declaring vars and grabbing from html
var quizQuestionsIndex = 0; //This is belongs to the start at the first question
var quizTime = quizQuestionContainer.length * 15; //creating the timer
var timerState; //holds all the time info and use it to be able to set interval and clear and interval
var timerEl = document.querySelector(".timer"); //the actual timer
var introEl = document.querySelector(".intro"); //the first div or intro div with start button
var questionsEl = document.querySelector(".questions-answers"); //the second div with questions
var doneEl = document.querySelector(".quizDone"); //quiz done page
var inputEl = document.querySelector(".input-group"); //initials input div
var highScoreEl = document.querySelector("highScoresListCard"); //highscores div will need to add a link to the hsin nav bar
var startButton = document.querySelector (".startButton"); //start button to start quiz
var submitButton = document.querySelector("#SubmitButton");// submit button to submit initials
var answersList = document.querySelector(".answersList");
//Create a -- helper function- this is setting timerEl to decrement (minus)
function setTimeMinus() {
  quizTime --;
  timerEl.textContent = quizTime;
    if (quizTime <= 0 ) {
      quizEnd() //show that div
    }

};

//This is hiding the appropriate divs as needed
function startQuiz() {
  introEl.setAttribute("class" , "hide") //CSS property placing it in the class attri and placing on introel which hides it
  questionsEl.removeAttribute("class" , "hide")

  timerState = setInterval(setTimeMinus, 1000)// each time your timer goes down do it in each second 1000 = 1 second 3000 = 3 seconds
  timerEl.textContent = quizTime ///updating the browser
  cycleQuestions()
};


function cycleQuestions() {
  var individualQuestion = quizQuestionContainer [
    quizQuestionsIndex              //line 54
  ]
 var questionContent = document.querySelector (".questionContent")
questionContent.textContent = individualQuestion.question; //Question container, quiz question index find the question
answersList.innerHTML = " ";

individualQuestion.choice.forEach(function(option){ //creating a button for each option in array
  var choiceButton = document.createElement("button")
  choiceButton.setAttribute("value", option ) //setting value for choice
  choiceButton.setAttribute("class", "answersList")
  choiceButton.textContent = option
choiceButton.onclick = checkAnswer
  
  answersList.appendChild (choiceButton)
})



};

function checkAnswer () { //check answers and input time punishment stuff
  if (this.value === quizQuestionContainer[quizQuestionsIndex].answer){
    console.log("Correct!") //Text Content Correct!
    
  } else {
    quizTime = quizTime - 10;
    timerEl.textContent = quizTime
    textContent = "Wrong!";
    console.log("wrong") ///need to have wrong show up
  }
 quizQuestionsIndex ++ //switches to the next question
  if (quizQuestionsIndex === quizQuestionContainer.length) {
    quizEnd () 

  } else { 
    cycleQuestions () //redisplay the next index- question
}};

//quiz end div
function quizEnd() {
  clearInterval(timerState)
  questionsEl.setAttribute("class" , "hide")
  doneEl.removeAttribute("class")
console.log("Quiz is over!")
//clearInterval(timerState)
//hide questions div unhide all done div
};
function saveHighScore(){
  highScoreEl.setAttribute("class" , "hide")
  doneEl.removeAttribute("class" , "hide")

};
startButton.onclick = startQuiz; /// this is also addEventList
submitButton.onclick = saveHighScore
//submit button have it fire the save high score function













 