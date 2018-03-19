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
    for(i = 0; i < questionList.length; i++) {
    question = questionList[0].question.toString();
    answer = questionList[0].answers;
    rightAnswer = questionList[0].correctAnswer;
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
        }
        else {
            incorrect++;
        }

    })
}




$("#start").on("click", function() {
    $("#start").hide();
   // $("#timeremaining").text("Time Remaining: " + questionTimer + " seconds");
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

// var timeRemaining = 30;
// var questionTimer = setInterval(function(){
//     console.log(timeRemaining);
//     timeRemaining--;
//     if (timeRemaining <= 0) {
//         clearInterval(questionTimer)
//     }
//   }, 1000);

// // Question/Answer Objects
// // =============================================================


// // Functions
// //==================================================

// function showQuestions() {
//     for(i = 0; i < questionList.length; i++) {
//         questionToPrint = questionList[i].question.toString();
//         $("<p>")
//         .text(questionToPrint)
//         .appendTo($("#questions"))  
//         answerToPrint = (questionList[i].answers)
//         $("<button>")
//         .addClass("answersYo")
//         .attr("id", "a")
//         .text(answerToPrint[0])
//         .appendTo($("#questions"))
//         $("<button>")
//         .addClass("answersYo")
//         .attr("id", "b")
//         .text(answerToPrint[1])
//         .appendTo($("#questions"))
//         $("<button>")
//         .addClass("answersYo")
//         .attr("id", "c")
//         .text(answerToPrint[2])
//         .appendTo($("#questions"))
//         $("<button>")
//         .addClass("answersYo")
//         .attr("id", "d")
//         .text(answerToPrint[3])
//         .appendTo($("#questions"))
//     }
// };

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