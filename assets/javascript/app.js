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
        img: $('<img src="./assets/images/pong.gif" width="360px" height="200px">'),
    },
    {
        questionText: `Which of these composers wrote the soundtracks for the original 
            "Super Mario Bros." and "The Legend of Zelda" games for the Nintendo Entertainment System?`,
        answerA: "A. Koji Kondo",
        answerB: "B. Nobuo Uematsu",
        answerC: "C. Yasunori Mitsuda",
        answerD: "D. Yoko Shimomura",
        correctAnswer: "A. Koji Kondo",
        img: $('<img src="./assets/images/koji_kondo.png" width="356px" height="200px">'),
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
        img: $('<img src="./assets/images/silicon_and_synapse.png" width="229px" height="200px">'),
    }];

    // console.log(questionArray[2].answerD); // but works here

    var chosenQuestion = null;
    var timerInterval = null;
    var nextQuestionTimerInterval = null;
    var answerHasBeenSelected = false;
    var timer = {
        time: 25,
        start: function (t) {
            timerInterval = setInterval(timer.decrement, 1000);
            setTimeout(function () {
                clearInterval(timerInterval);
            }, t);
        },
        stop: function () {
            clearInterval(timerInterval);
        },
        decrement: function () {
            timer.time--;
            var convertedTime = timer.timeConverter(timer.time);
            $("#timer").text(convertedTime);
        },
        timeConverter: function (t) {
            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            if (minutes === 0) {
                minutes = "00";
            } else if (minutes < 10) {
                minutes = "0" + minutes;
            }
            return `${minutes}:${seconds}`;
        },
    };
    var nextQuestionTimer = {
        time: 5,
        start: function () {
            nextQuestionTimerInterval = setInterval(nextQuestionTimer.decrement, 1000);
            setTimeout(function () {
                clearInterval(nextQuestionTimerInterval);
            }, 5000);
        },
        decrement: function () {
            nextQuestionTimer.time--;
            $("#next-question-timer").text(`Next question in ${nextQuestionTimer.time}...`);
        },
    }

    $("#start-button").hover(function () {
        $(this).css("background-color", "#4aaaa5");
    }, function () {
        $(this).css("background-color", "#191a1e");
    });

    // use RNG to select and display a random object with a timer counting down to 0
    $("#start-button").on("click", function () {
        var RNG = Math.floor((Math.random() * 3) + 0);
        chosenQuestion = questionArray[RNG];

        // get rid of start button
        $("#start-button").empty();
        $(".start-row").empty();

        // create panel, questions, and answers
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
            "display": "flex",
            "flex-direction": "column",
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

        // create and start timer
        $("#question-panel").append(`<p id="timer">${timer.timeConverter(25)}</p>`);
        $("#timer").css({
            "color": "#09ff00",
            "text-align": "center",
            "margin": `${10}px`,
            "font-size": `${25}px`,
        });
        timer.start(2000); // change back to 25000 later
        setTimeout(function () {
            if (answerHasBeenSelected === false) {
                $(".answer").remove();
                $("#timer").remove();
                $("#question-text").after(`<p id="correct-answer-sentence" class="post-guess-text">Time's up! The correct answer was:</p>`);
                $("#correct-answer-sentence").after(`<p id="correct-answer" class="post-guess-text">${chosenQuestion.correctAnswer}</p>`);
                $("#correct-answer").after(chosenQuestion.img);
                $(chosenQuestion.img).after(`<p id="next-question-timer" class="post-guess-text">Next question in 5...</p>`);
                $(chosenQuestion.img).css({
                    "align-self": "center",
                    "margin-top": `${10}px`,
                    "margin-bottom": `${10}px`,
                });
                $(".post-guess-text").css({
                    "text-align": "center",
                    "line-height": 1.5,
                })
                nextQuestionTimer.start();
            }
        }, 2000); // change back to 25000 later

    });

    $("body").on("click", "p.answer", function () {
        answerHasBeenSelected = true;
        if ($(this).text() === chosenQuestion.correctAnswer) {
            console.log("you win, yay");
            timer.stop();
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