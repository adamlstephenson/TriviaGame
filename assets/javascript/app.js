$("document").ready(function() {

// Global variables
//============================================================

var position = 0;
var question;
var choice; 
var choices;
var choiceA;
var choiceB;
var choiceC; 
var choiceD;
var correct = 0;
var incorrect = 0;
var timeRemaining = 61;

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

// Functions
//==============================================================================================

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
        position = 0;
        correct = 0;
        incorrect = 0;
       
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

    function timer() {
        timeRemaining--;
        if(timeRemaining <= 0) {
            clearInterval(timer)
            $("#timeremaining").hide();
            $("#q1").hide();
            $("#q2").hide();
            $("#q3").hide();
            $("#q4").hide();
            $("#submit").hide();
            $("#questions").text("You got " + correct + " questions right and " + incorrect + " wrong.");
            $("#startover").html("<h3>Start Over</h3>");
            return false;
        }
        $("#timeremaining").text("Time Remaining: " + timeRemaining + " seconds");
    }

    function reset() {
        $(("#startover")).on("click", function() {
            $("#startover").hide();
            showQuestion(); 
        })
    };


// Game Process
//====================================================================================


$("#start").on("click", function() {
    $("#start").hide();
    timer();
    counter = setInterval(timer, 1000);
    showQuestion();
    checkAnswer();
    reset();
    
})

});