// Global variables
//=============================================================
$("document").ready(function() {

var timeRemaining;
var questionArray = [];
var answerArray = [];
var correctAnswers;
var incorrectAnswers;
var unanswered;

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
        correctAnswer: "a"
    },
    {
        question: "Which species is a hybrid cross between a female brown trout and a male brook trout",
        answers: {
            a: "Gila Trout",
            b: "Golden Trout",
            c: "Tiger Trout",
            d: "Bull Trout",
        },
        correctAnswer: "c"
    },
    {
        question: "When do brown trout spawn?",
        answers: {
            a: "Spring",
            b: "Summer",
            c: "Fall",
            d: "Winter",
        },
        correctAnswer: "c"
    },
    {
        question: "A trout's age can be determined by what feature?",
        answers: {
            a: "Colorization",
            b: "Scales",
            c: "Length",
            d: "Adipose fin",
        },
        correctAnswer: "b"
    },
    {
        question: "Trout lay their eggs in nests called what?",
        answers: {
            a: "Cribs",
            b: "Beds",
            c: "Incubators",
            d: "Redds",
        },
        correctAnswer: "d"
    },
    {
        question: "Brown trout can be found in which country?",
        answers: {
            a: "Sri Lanka",
            b: "Argentina",
            c: "Zimbabwe",
            d: "All of the above",
        },
        correctAnswer: "d"
    },
    {
        question: "What is the largest species of trout in the world?",
        answers: {
            a: "Bull Trout",
            b: "Taimen",
            c: "Steelhead",
            d: "Tiger Trout",
        },
        correctAnswer: "b"
    },
    {
        question: "How large was the rod and reel record lake trout?",
        answers: {
            a: "72 pounds",
            b: "33 pounds",
            c: "96 pounds",
            d: "21 pounds",
        },
        correctAnswer: "a"
    },
    {
        question: "What is the scientific name for rainbow trout?",
        answers: {
            a: "Salvelinus fontinalis",
            b: "Oncorhynchus mykiss",
            c: "Salmo trutta",
            d: "Cyprinus carpio",
        },
        correctAnswer: "b"
    },
    {
        question: "A trout's swim bladder helps it do what?",
        answers: {
            a: "Urinate",
            b: "Hold air as an oxygen reserve",
            c: "Float",
            d: "Prevent infections",
        },
        correctAnswer: "c"
    },

];


$("#start").on("click", function() {
    $("#start").hide();
    $("#timeremaining").text("Time Remaining: " + timeRemaining + " Seconds");
    // show question
    // show answer options

});




});