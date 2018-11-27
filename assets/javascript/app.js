// create basic page layout with start button
$(document).ready(function () {
    // create object of questions with 4 possible answers and one correct answer

    var _questions = [{
        questionText: "What was the first ever game released for the Atari 2600?",
        answerA: "A. Asteroids",
        answerB: "B. Snake",
        answerC: "C. Pong",
        answerD: "D. Space Invaders",
        correctAnswer: this.answerC,
    },
    {
        questionText: `Which of these composers wrote the soundtracks for the original 
            "Super Mario Bros." and "The Legend of Zelda" games for the Nintendo Entertainment System?`,
        answerA: "A. Koji Kondo",
        answerB: "B. Nobuo Uematsu",
        answerC: "C. Yasunori Mitsuda",
        answerD: "D. Yoko Shimomura",
        correctAnswer: this.answerA,
    },
    {
        questionText: `Known for making such titles as "World of Warcraft" and "Diablo", the 
            company "Activision Blizzard" was orginally called by what name in the early 90s?`,
        answerA: "A. Interplay Productions",
        answerB: "B. Condor Games",
        answerC: "C. Ogre Studios",
        answerD: "D. Silicon & Synapse",
        correctAnswer: this.answerD,
    }];

    // turn this into array with no object names for each element; splice them out

    $("#start-button").hover(function () {
        $(this).css("background-color", "#4aaaa5");
    }, function () {
        $(this).css("background-color", "#191a1e");
    });

    // use RNG to select and display a random object with a timer counting down to 0
    $("#start-button").click(function () {
        var RNG = Math.floor((Math.random() * 3) + 0);
        var chosenQuestion = Object.keys(_questions)[RNG];
        console.log(chosenQuestion);
        console.log(Object.values(_questions)[RNG]);
        $("#start-button").empty();
        $(".start-row").empty();
        $("#question-panel").append(_questions[RNG].questionText);
        $("#question-panel").append(_questions[RNG].answerA);
        $("#question-panel").append(_questions[RNG].answerB);
        $("#question-panel").append(_questions[RNG].answerC);
        $("#question-panel").append(_questions[RNG].answerD);
        $("#question-panel").css({
            "background-color": "#191a1e",
            "border-width": `${2}px`,
            "border-style": "solid",
            "border-color": "#777777",
            "position": "relative",
            "top": `${135}px`,
        });
    });

    // ask about global if statements
    // look up for vs foreach
    // $('selector').on("click", function () {

    // tally # of right/wrong/unselected answers

    // display correct answer, whether the player was correct,
    // incorrect, or ran out of time and start a timer to display next question

    // at end of game, display score tallies and a reset game button


});