// Global variables
//=============================================================
$("document").ready(function() {

var timeRemaining = 30;
var questionArray = [];
var answerArray = [];
var correctAnswers;
var incorrectAnswers;
var unanswered;

var questionTimer = setInterval(function(){
    console.log(timeRemaining);
    timeRemaining--;
    if (timeRemaining === 0) {
        clearInterval(questionTimer)
    }
  }, 1000);

// Question/Answer Objects
// =============================================================

var questionList = [
    {
        question: "What is the only species of trout native to Minnesota?",
        answers: {
            a: "Brook Trout",
            b: "Rainbow Trout",
            c: "Brown Trout",
            d: "Cutthroat Trout",
        },
    },
    {
        question: "Which species is a hybrid cross between a female brown trout and a male brook trout",
        answers: {
            a: "Gila Trout",
            b: "Golden Trout",
            c: "Tiger Trout",
            d: "Bull Trout",
        },
    },
    {
        question: "When do brown trout spawn?",
        answers: {
            a: "Spring",
            b: "Summer",
            c: "Fall",
            d: "Winter",
        },
    },
    {
        question: "A trout's age can be determined by what feature?",
        answers: {
            a: "Colorization",
            b: "Scales",
            c: "Length",
            d: "Adipose fin",
        },
    },
    {
        question: "Trout lay their eggs in nests called what?",
        answers: {
            a: "Cribs",
            b: "Beds",
            c: "Incubators",
            d: "Redds",
        },
    },
    {
        question: "Brown trout can be found in which country?",
        answers: {
            a: "Sri Lanka",
            b: "Argentina",
            c: "Zimbabwe",
            d: "All of the above",
        },
    },
    {
        question: "What is the largest species of trout in the world?",
        answers: {
            a: "Bull Trout",
            b: "Taimen",
            c: "Steelhead",
            d: "Tiger Trout",
        },
    },
    {
        question: "How large was the rod and reel record lake trout?",
        answers: {
            a: "72 pounds",
            b: "33 pounds",
            c: "96 pounds",
            d: "21 pounds",
        },
    },
    {
        question: "What is the scientific name for rainbow trout?",
        answers: {
            a: "Salvelinus fontinalis",
            b: "Oncorhynchus mykiss",
            c: "Salmo trutta",
            d: "Cyprinus carpio",
        },
    },
    {
        question: "A trout's swim bladder helps it do what?",
        answers: {
            a: "Urinate",
            b: "Hold air as an oxygen reserve",
            c: "Float",
            d: "Prevent infections",
        },
    },

];

correctAnswers = ['a', 'c', 'c', 'b', 'd', 'd', 'b', 'a', 'b', 'c']

for (i = 0; i < questionList.length; i++) {
    console.log(i);
    let obj = questionList[i];
    console.log(questionList.question);
}


$("#start").on("click", function() {
    $("#start").hide();
    $("#timeremaining").text("Time Remaining: " + questionTimer + " seconds");
    $("#question").text(questionList[0].question);
    $("#answers").text(questionList[0].answers);
    // show answer options

});

});

// General Process
// =================================================================

/*

1. Page loads with start button
2. Start button disappears
3. Game begins
    a. Timer starts
        b. if expired - lose
    b. Question appears
    c. answers choices appear
4. Player chooses answer
    a. if correct - alert, display correct answer (maybe photo), add to correct total
    b. if wrong - alert, display correct answer (maybe photo), add to incorrect list
5. Wait 7 seconds
6. Go to next question
7. Repeat game again
8. After 10 questions
    a. Show how they did - correct, incorrect, unanswered
    b. Click option to restart game without refreshing

    */