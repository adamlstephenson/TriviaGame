// Global variables
//=============================================================
$("document").ready(function() {

var position = 0; test, test_status, question, choice, choices, choiceA, choiceB, choiceC, choiceD, correct = 0;
var questions = [
    ["What is the only species of trout native to Minnesota?", "Brook Trout", "Rainbow Trout", "Brown Trout", "Cutthroat Trout", "A"],
    ["Which species is a hybrid cross between a female brown trout and a male brook trout", "Gila Trout", "Golden Trout", "Tiger Trout", "Bull Trout", "C"],
    ["When do brown trout spawn?", "Spring", "Summer", "Fall", "Winter", "C"],
    ["A trout's age can be determined by what feature?", "Colorization", "Scales", "Length", "Adipose fin", "B"],
    ["Trout lay their eggs in nests called what?", "Cribs", "Beds","Incubators","Redds", "D"],
    ["Brown trout can be found in which country?", "Sri Lanka", "Argentina", "Zimbabwe", "All of the above", "D"],
    ["What is the largest species of trout in the world?", "Bull Trout", "Taimen", "Steelhead", "Tiger Trout", "B"],
    ["How large was the rod and reel record lake trout?", "72 pounds", "33 pounds", "96 pounds", "21 pounds", "A"],
    ["What is the scientific name for rainbow trout?", "Salvelinus fontinalis", "Oncorhynchus mykiss", "Salmo trutta", "Cyprinus carpio", "C"],
    ["A trout's swim bladder helps it do what?", "Urinate", "Hold air as an oxygen reserve", "Float", "Prevent infections", "C"]



];















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

// var questionList = [{
//         question: "What is the only species of trout native to Minnesota?",
//         answers: ["Brook Trout", "Rainbow Trout", "Brown Trout", "Cutthroat Trout"],
//         correctAnswer: 0
//         },
//     {
//         question: "Which species is a hybrid cross between a female brown trout and a male brook trout",
//         answers: ["Gila Trout", "Golden Trout", "Tiger Trout", "Bull Trout"],
//         correctAnswer: 2
//         },
//     {
//         question: "When do brown trout spawn?",
//         answers: ["Spring", "Summer", "Fall", "Winter"],
//         correctAnswer: 2
//         },
//     {
//         question: "A trout's age can be determined by what feature?",
//         answers: ["Colorization", "Scales", "Length", "Adipose fin"],
//         correctAnswer: 1
//     },
//     {
//         question: "Trout lay their eggs in nests called what?",
//         answers: ["Cribs", "Beds","Incubators","Redds"],
//         correctAnswer: 3
//     },
//     {
//         question: "Brown trout can be found in which country?",
//         answers: ["Sri Lanka", "Argentina", "Zimbabwe", "All of the above"],
//         correctAnswer: 3
//     },
//     {
//         question: "What is the largest species of trout in the world?",
//         answers: ["Bull Trout", "Taimen", "Steelhead", "Tiger Trout"],
//         correctAnswer: 1
//         },
//     {
//         question: "How large was the rod and reel record lake trout?",
//         answers: ["72 pounds", "33 pounds", "96 pounds", "21 pounds"],
//         correctAnswer: 0
//         },
//     {
//         question: "What is the scientific name for rainbow trout?",
//         answers: ["Salvelinus fontinalis", "Oncorhynchus mykiss", "Salmo trutta", "Cyprinus carpio"],
//         correctAnswer: 1
//     },
//     {
//         question: "A trout's swim bladder helps it do what?",
//         answers: ["Urinate", "Hold air as an oxygen reserve", "Float", "Prevent infections"],
//         correctAnswer: 2
//         },

// ];

// // correctAnswers = ['a', 'c', 'c', 'b', 'd', 'd', 'b', 'a', 'b', 'c']

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

// // Game Process
// //======================================================
// $("#start").on("click", function() {
//     $("#start").hide();
//     $("#timeremaining").text("Time Remaining: " + questionTimer + " seconds");
//     showQuestions();
//         $("button").on("click", function(event) {
//             var selectedAnswer = event;
//             console.log(selectedAnswer)
//         })
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