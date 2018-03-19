// Global variables
//=============================================================
$("document").ready(function() {

var position = 0;
var test;
var test_status; 
var question;
var choice; 
var choices;
var choiceA;
var choiceB;
var choiceC; 
var choiceD;
var correct = 0;
var incorrect = 0;
var timeRemaining = 30;

var questionList = [{
    question: "What is the only species of trout native to Minnesota?",
    answers: ["Brook Trout", "Rainbow Trout", "Brown Trout", "Cutthroat Trout"],
    correctAnswer: "A"
    },
{
    question: "Which species is a hybrid cross between a female brown trout and a male brook trout",
    answers: ["Gila Trout", "Golden Trout", "Tiger Trout", "Bull Trout"],
    correctAnswer: "C"
    },
{
    question: "When do brown trout spawn?",
    answers: ["Spring", "Summer", "Fall", "Winter"],
    correctAnswer: "C"
    },
{
    question: "A trout's age can be determined by what feature?",
    answers: ["Colorization", "Scales", "Length", "Adipose fin"],
    correctAnswer: "B"
},
{
    question: "Trout lay their eggs in nests called what?",
    answers: ["Cribs", "Beds","Incubators","Redds"],
    correctAnswer: "D"
},
{
    question: "Brown trout can be found in which country?",
    answers: ["Sri Lanka", "Argentina", "Zimbabwe", "All of the above"],
    correctAnswer: "D"
},
{
    question: "What is the largest species of trout in the world?",
    answers: ["Bull Trout", "Taimen", "Steelhead", "Tiger Trout"],
    correctAnswer: "B"
    },
{
    question: "How large was the rod and reel record lake trout?",
    answers: ["72 pounds", "33 pounds", "96 pounds", "21 pounds"],
    correctAnswer: "Z"
    },
{
    question: "What is the scientific name for rainbow trout?",
    answers: ["Salvelinus fontinalis", "Oncorhynchus mykiss", "Salmo trutta", "Cyprinus carpio"],
    correctAnswer: "B"
},
{
    question: "A trout's swim bladder helps it do what?",
    answers: ["Urinate", "Hold air as an oxygen reserve", "Float", "Prevent infections"],
    correctAnswer: "C"
    },

];

function showQuestion () {
    if(position >= questionList.length) {
        $("#timeremaining").hide();
        $("#q1").hide();
        $("#q2").hide();
        $("#q3").hide();
        $("#q4").hide();
        $("#submit").hide();
        $("#questions").text("You got " + correct + " questions right and " + incorrect + " wrong.");
        $("#startover").html("<h3>Start Over</h3>");
    }
    for(i = 0; i < questionList.length; i++) {
    question = questionList[position].question.toString();
    answer = questionList[position].answers;
    rightAnswer = questionList[position].correctAnswer;
        choiceA = answer[0];
        choiceB = answer[1];
        choiceC = answer[2];
        choiceD = answer[3];
    $("#questions").html("<h3>" + question + "</h3>")
    $("#q1").html("<input type='radio' name = 'choices' value='A'> " + choiceA + "<br>");
    $("#q2").html("<input type='radio' name = 'choices' value='B'> " + choiceB + "<br>");
    $("#q3").html("<input type='radio' name = 'choices' value='C'> " + choiceC + "<br>");
    $("#q4").html("<input type='radio' name = 'choices' value='D'> " + choiceD + "<br>");
    $("#submit").html("<input type='submit'>");

}
}

function checkAnswer() {
    $("#submit").on("click", function() {
    choices = document.getElementsByName("choices");
        for(j = 0; j < choices.length; j++) {
            if (choices[j].checked) {
                choice = choices[j].value;
            }
        }
        console.log(choice)
        if (choice === rightAnswer) {
            correct++;
            position++;
            showQuestion();
        }
        else {
            incorrect++;
            position++;
            showQuestion();
        }

    })
}

var questionTimer = setInterval(function(){
    console.log(timeRemaining);
    timeRemaining--;
    if (timeRemaining <= 0) {
        clearInterval(questionTimer)
    }
  }, 1000);




$("#start").on("click", function() {
    $("#start").hide();
   $("#timeremaining").text("Time Remaining: " + timeRemaining + " seconds");
    showQuestion();
    checkAnswer();
        })


});

// var timeRemaining = 30;
// var questionArray = [];
// var answerArray = [];
// var correctAnswers;
// var incorrectAnswers;
// var unanswered;
// var currentQuestion = 0;



// // Question/Answer Objects
// // =============================================================


// // Functions
// //==================================================


// Game Process
//======================================================

// })



// });



// // General Process
// // =================================================================

// /*

// 1. Page loads with start button
// 2. Start button disappears
// 3. Game begins
//     a. Timer starts
//         b. if expired - lose
//     b. Question appears
//     c. answers choices appear
// 4. Player chooses answer
//     a. if correct - alert, display correct answer (maybe photo), add to correct total
//     b. if wrong - alert, display correct answer (maybe photo), add to incorrect list
// 5. Wait 7 seconds
// 6. Go to next question
// 7. Repeat game again
// 8. After 10 questions
//     a. Show how they did - correct, incorrect, unanswered
//     b. Click option to restart game without refreshing

//     */