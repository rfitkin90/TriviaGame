// create basic page layout with start button
$(document).ready(function () {
    // create object of questions with 4 possible answers and one correct answer

    var _questions = {
        question1: {
            questionText: "What was the first ever game released for the Atari 2600?",
            answerA: "Asteroids",
            answerB: "Snake",
            answerC: "Pong",
            answerD: "Space Invaders",
            correctAnswer: "C",
            // console: console.log(1),
        },
        question2: {
            questionText: `Which of these composers wrote the soundtracks for the original 
            "Super Mario Bros." and "The Legend of Zelda" games for the Nintendo Entertainment System?`,
            answerA: "Koji Kondo",
            answerB: "Nobuo Uematsu",
            answerC: "Yasunori Mitsuda",
            answerD: "Yoko Shimomura",
            correctAnswer: "A",
            // console: console.log(2),
        },
        question3: {
            questionText: `Known for making such titles as "World of Warcraft" and "Diablo", the 
            company "Activision Blizzard" was orginally called by what name in the early 90s?`,
            answerA: "Interplay Productions",
            answerB: "Condor Games",
            answerC: "Ogre Studios",
            answerD: "Silicon & Synapse",
            correctAnswer: "D",
            // console: console.log(3),
        },
    };

    $("#start-button").hover(function () {
        $(this).css("background-color", "#4aaaa5");
    }, function () {
        $(this).css("background-color", "#191a1e");
    });

    // use RNG to select and display a random object with a timer counting down to 0
    $("#start-button").click(function(){
    var RNG = Math.floor((Math.random() * 3) + 0);
    var chosenQuestion = Object.keys(_questions)[RNG];
    console.log(chosenQuestion);
    console.log(Object.values(_questions)[RNG]);
    });

    // tally # of right/wrong/unselected answers

    // display correct answer, whether the player was correct,
    // incorrect, or ran out of time and start a timer to display next question

    // at end of game, display score tallies and a reset game button


});