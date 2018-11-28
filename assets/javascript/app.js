// create basic page layout with start button
$(document).ready(function () {
    // create object of questions with 4 possible answers and one correct answer

    var questionArray = [{
        questionText: "What was the first ever game released for the Atari 2600?",
        answerA: "A. Asteroids",
        answerB: "B. Snake",
        answerC: "C. Pong",
        answerD: "D. Space Invaders",
        correctAnswer: "C. Pong",
    },
    {
        questionText: `Which of these composers wrote the soundtracks for the original 
            "Super Mario Bros." and "The Legend of Zelda" games for the Nintendo Entertainment System?`,
        answerA: "A. Koji Kondo",
        answerB: "B. Nobuo Uematsu",
        answerC: "C. Yasunori Mitsuda",
        answerD: "D. Yoko Shimomura",
        correctAnswer: "A. Koji Kondo",
    },
    {
        questionText: `Known for making such titles as "World of Warcraft" and "Diablo", the 
            company "Activision Blizzard" was orginally called by what name in the early 90s?`,
        answerA: "A. Interplay Productions",
        answerB: "B. Condor Games",
        answerC: "C. Ogre Studios",
        answerD: "D. Silicon & Synapse",
        correctAnswer: "D. Silicon & Synapse",
        // correctAnswer: this.answerD, // ------------- doesnt work here
        // correctAnswer: questionArray[2].answerD, // ------------- or here
    }];

    // console.log(questionArray[2].answerD); // but works here

    var chosenQuestion = null;

    // turn this into array with no object names for each element; splice them out

    $("#start-button").hover(function () {
        $(this).css("background-color", "#4aaaa5");
    }, function () {
        $(this).css("background-color", "#191a1e");
    });

    // use RNG to select and display a random object with a timer counting down to 0
    $("#start-button").on("click", function () {
        var RNG = Math.floor((Math.random() * 3) + 0);
        chosenQuestion = questionArray[RNG];
        $("#start-button").empty();
        $(".start-row").empty();
        $("#question-panel").append(`<p id="question-text">${questionArray[RNG].questionText}</p>`);
        $("#question-panel").append(`<p id="answer-A" class="answer">${questionArray[RNG].answerA}</p>`);
        $("#question-panel").append(`<p id="answer-B" class="answer">${questionArray[RNG].answerB}</p>`);
        $("#question-panel").append(`<p id="answer-C" class="answer">${questionArray[RNG].answerC}</p>`);
        $("#question-panel").append(`<p id="answer-D" class="answer">${questionArray[RNG].answerD}</p>`);
        $("#question-panel").css({
            "background-color": "#191a1e",
            "border-width": `${2}px`,
            "border-style": "solid",
            "border-color": "#777777",
            "position": "relative",
            "top": `${115}px`,
            "font-weight": "bold",
            "line-height": 1.3,
            "padding": `${15}px`,
        });
        $("#question-panel").children("p").first().css({
            "margin-bottom": `${20}px`,
        });
        $("#question-panel").children(".answer").css({
            "padding": `${8}px`,
            "cursor": "pointer",
        });
        $("#question-panel").children(".answer").hover(function () {
            $(this).css("background-color", "#4aaaa5");
        }, function () {
            $(this).css("background-color", "#191a1e");
        });
        $("#question-panel").children("p").last().css({
            "margin-bottom": 0,
        });

        $("#question-panel").append(`<p id="timer">00:25</p>`);
        $("#timer").css({
            "color": "#09ff00",
            "text-align": "center",
            "margin": `${10}px`,
            "font-size": `${25}px`,
        });

        function decrementTimer() {

        };

    });

    $("body").on("click", "p.answer", function () {
        if ($(this).text() === chosenQuestion.correctAnswer) {
            console.log("you win, yay");
        } else { 

        }
    });

    // ask about global if statements
    // look up for vs foreach
    // $('selector').on("click", function () {

    // tally # of right/wrong/unselected answers

    // display correct answer, whether the player was correct,
    // incorrect, or ran out of time and start a timer to display next question

    // at end of game, display score tallies and a reset game button


});