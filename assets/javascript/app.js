// create basic page layout with start button
$(document).ready(function () {

    // create array of questions with 4 possible answers and one correct answer
    var questionArray = [{
        questionText: "What was the first ever game released for the Atari 2600?",
        answers: [
            "A. Asteroids",
            "B. Snake",
            "C. Pong",
            "D. Space Invaders",
        ],
        // correctAnswer: this.answers[2], // not working
        correctAnswer: "C. Pong",
        img: $('<img src="./assets/images/pong.gif" width="360px" height="200px">'),
    },
    {
        questionText: `Which of these composers wrote the soundtracks for the original 
            "Super Mario Bros." and "The Legend of Zelda" games for the Nintendo Entertainment System?`,
        answers: [
            "A. Koji Kondo",
            "B. Nobuo Uematsu",
            "C. Yasunori Mitsuda",
            "D. Yoko Shimomura",
        ],
        // correctAnswer: this.answers[0], // not working
        correctAnswer: "A. Koji Kondo",
        img: $('<img src="./assets/images/koji_kondo.png" width="356px" height="200px">'),
    },
    {
        questionText: `Known for making such titles as "World of Warcraft" and "Diablo", the 
            company "Activision Blizzard" was orginally called by what name in the early 90s?`,
        answers: [
            "A. Interplay Productions",
            "B. Condor Games",
            "C. Ogre Studios",
            "D. Silicon & Synapse",
        ],
        // correctAnswer: this.answers[3], // not working
        correctAnswer: "D. Silicon & Synapse",
        img: $('<img src="./assets/images/silicon_and_synapse.png" width="229px" height="200px">'),
        // },
        // {
        //     questionText: `Which Pokémon is logged in the first slot of the Pokédex?`,
        //     answers: [
        //         "A. Pikachu",
        //         "B. Squirtle",
        //         "C. Charmander",
        //         "D. Bulbasaur",
        //     ],
        //     // correctAnswer: this.answers[0], // not working
        //     correctAnswer: "D. Bulbasaur",
        //     img: $('<img src="./assets/images/koji_kondo.png" width="356px" height="200px">'),
    }];

    var chosenQuestion = null;
    var timerInterval = null;
    var nextQuestionTimerInterval = null;
    var roundEndTimerInterval = null;
    var answerHasBeenSelected = false;
    var RNG = null;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;

    // post-guess text
    var correctGuess = "Correct!";
    var incorrectGuess = "Wrong! The correct answer was:";
    var timeoutGuess = "Time's up! The correct answer was:";

    // timer for answering question
    var timer = {
        time: 25,
        start: function () {
            this.time = 25;
            timerInterval = setInterval(timer.decrement, 1000);
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

    // timer that counts down to next question
    var nextQuestionTimer = {
        time: 5,
        start: function () {
            this.time = 5;
            nextQuestionTimerInterval = setInterval(nextQuestionTimer.decrement, 1000);
            setTimeout(function () {
                clearInterval(nextQuestionTimerInterval);
                $("#question-panel").empty();
                populateQuestionPanel();
            }, 5000);
        },
        decrement: function () {
            nextQuestionTimer.time--;
            $("#next-question-timer").text(`Next question in ${nextQuestionTimer.time}...`);
        },
    }
    // timer to end the round
    var roundEndTimer = {
        time: 5,
        start: function () {
            this.time = 5;
            roundEndTimerInterval = setInterval(roundEndTimer.decrement, 1000);
            setTimeout(function () {
                clearInterval(roundEndTimerInterval);
                $("#question-panel").empty();
                populateRoundEndScreen();
            }, 5000);
        },
        decrement: function () {
            roundEndTimer.time--;
            $("#next-question-timer").text(`Round end in ${roundEndTimer.time}...`);
        },
    }

    // start button
    $("#start-button").hover(function () {
        $(this).css("background-color", "#4aaaa5");
    }, function () {
        $(this).css("background-color", "#191a1e");
    });

    // use RNG to select and display a random object with a timer counting down to 0
    $("#start-button").on("click", function () {

        // create panel, questions, and answers
        populateQuestionPanel();

    });

    // on click for answers
    $("body").on("click", "p.answer", function () {
        answerHasBeenSelected = true;
        if ($(this).text() === chosenQuestion.correctAnswer) {
            timer.stop();
            postGuessPanel(correctGuess, RNG);
            correctAnswers++;
        } else {
            timer.stop();
            postGuessPanel(incorrectGuess, RNG);
            incorrectAnswers++;
        }
    });


    // -------------------- Functions ----------------- //
    function populateQuestionPanel() {
        // generate random number and get random question from array
        RNG = Math.floor((Math.random() * questionArray.length) + 0);
        chosenQuestion = questionArray[RNG];

        answerHasBeenSelected = false;

        // get rid of start button
        $("#start-button").detach();
        $(".start-row").detach();

        // populate question panel with questions and answers
        $("#question-panel").append(`<p id="question-text">${questionArray[RNG].questionText}</p>`);
        $("#question-panel").append(`<p id="answer-A" class="answer">${questionArray[RNG].answers[0]}</p>`);
        $("#question-panel").append(`<p id="answer-B" class="answer">${questionArray[RNG].answers[1]}</p>`);
        $("#question-panel").append(`<p id="answer-C" class="answer">${questionArray[RNG].answers[2]}</p>`);
        $("#question-panel").append(`<p id="answer-D" class="answer">${questionArray[RNG].answers[3]}</p>`);

        // give question panel some css
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
        timer.start();

        // if user runs out of time w/o making a guess
        setTimeout(function () {
            if (answerHasBeenSelected === false) {
                timer.stop();
                postGuessPanel(timeoutGuess, RNG);
                unansweredQuestions++;
            }
        }, 25000);
    }

    // display correct answer, whether the player was correct,
    // incorrect, or ran out of time and start a timer to display next question
    function postGuessPanel(guessOutcome, RNG) {

        $("#question-panel").css({
            "top": `${55}px`,
        });

        if (questionArray.length > 1) {
            console.log(questionArray.length);
            $(".answer").remove();
            $("#timer").remove();

            // correct/incorrect verification
            $("#question-text").after(`<p id="correct-answer-sentence" class="post-guess-text">
            ${guessOutcome}</p>`);

            // show correct answer, image, and next question timer
            $("#correct-answer-sentence").after(`<p id="correct-answer" class="post-guess-text">
            ${chosenQuestion.correctAnswer}</p>`);
            $("#correct-answer").after(chosenQuestion.img);

            // timer countdown to next questions
            $(chosenQuestion.img).after(`<p id="next-question-timer" class="post-guess-text">
            Next question in 5...</p>`);

            // give image and text some css
            $(chosenQuestion.img).css({
                "align-self": "center",
                "margin-top": `${10}px`,
                "margin-bottom": `${10}px`,
            });
            $(".post-guess-text").css({
                "text-align": "center",
                "line-height": 1.5,
            });

            // start next question timer
            nextQuestionTimer.start();

            // remove question from the question array(to prevent repeats)
            questionArray.splice(RNG, 1);
        } else {
            $(".answer").remove();
            $("#timer").remove();

            // correct/incorrect verification
            $("#question-text").after(`<p id="correct-answer-sentence" class="post-guess-text">
            ${guessOutcome}</p>`);

            // show correct answer, image, and next question timer
            $("#correct-answer-sentence").after(`<p id="correct-answer" class="post-guess-text">
            ${chosenQuestion.correctAnswer}</p>`);
            $("#correct-answer").after(chosenQuestion.img);

            // timer countdown to next questions
            $(chosenQuestion.img).after(`<p id="next-question-timer" class="post-guess-text">
            Round end in 5...</p>`);

            // give image and text some css
            $(chosenQuestion.img).css({
                "align-self": "center",
                "margin-top": `${10}px`,
                "margin-bottom": `${10}px`,
            });
            $(".post-guess-text").css({
                "text-align": "center",
                "line-height": 1.5,
            });

            // round end question timer
            roundEndTimer.start();
        }
    }

    // at end of game, display score tallies and a reset game button
    function populateRoundEndScreen() {
        $("#question-panel").empty();
        $("#question-panel").append(`<p id="score-tally-header" class="score-tally-text">Total Score:</p>`);
        $("#question-panel").css({
            "top": `${115}px`,
        });
        $("#score-tally-header").css({
            "font-size": `${30}px`,
        });
        $("#question-panel").append(`<p class="score-tally-text">Correct answers: ${correctAnswers}</p>`);
        $("#question-panel").append(`<p class="score-tally-text">Incorrect answers: ${incorrectAnswers}</p>`);
        $("#question-panel").append(`<p class="score-tally-text">Unanswered: ${unansweredQuestions}</p>`);
        $(".score-tally-text").css({
            "text-align": "center",
            "line-height": 2,
        });
        $("#question-panel").append(`<div class="btn start-or-restart-btn" id="restart-button">Restart?</div>`);
        $("#restart-button").css({
            "top": "initial",
            "width": `${142}px`,
            "margin": "auto",
            "margin-top": `${20}px`,
            "margin-bottom": `${20}px`,
        });
        $("#restart-button").hover(function () {
            $(this).css("background-color", "#4aaaa5");
        }, function () {
            $(this).css("background-color", "#191a1e");
        });

        // why does this on click not work if moved outside of populateRoundEndScreen function?
        $("#restart-button").on("click", function () {
            // set variables back to initial values
            chosenQuestion = null;
            timerInterval = null;
            nextQuestionTimerInterval = null;
            roundEndTimerInterval = null;
            answerHasBeenSelected = false;
            RNG = null;
            correctAnswers = 0;
            incorrectAnswers = 0;
            unansweredQuestions = 0;

            // redeclares original question array(since everything was spliced out to prevent repeat questions)
            questionArray = [{
                questionText: "What was the first ever game released for the Atari 2600?",
                answers: [
                    "A. Asteroids",
                    "B. Snake",
                    "C. Pong",
                    "D. Space Invaders",
                ],
                // correctAnswer: this.answers[2],
                correctAnswer: "C. Pong",
                img: $('<img src="./assets/images/pong.gif" width="360px" height="200px">'),
            },
            {
                questionText: `Which of these composers wrote the soundtracks for the original 
                    "Super Mario Bros." and "The Legend of Zelda" games for the Nintendo Entertainment System?`,
                answers: [
                    "A. Koji Kondo",
                    "B. Nobuo Uematsu",
                    "C. Yasunori Mitsuda",
                    "D. Yoko Shimomura",
                ],
                // correctAnswer: this.answers[0],
                correctAnswer: "A. Koji Kondo",
                img: $('<img src="./assets/images/koji_kondo.png" width="356px" height="200px">'),
            },
            {
                questionText: `Known for making such titles as "World of Warcraft" and "Diablo", the 
                    company "Activision Blizzard" was orginally called by what name in the early 90s?`,
                answers: [
                    "A. Interplay Productions",
                    "B. Condor Games",
                    "C. Ogre Studios",
                    "D. Silicon & Synapse",
                ],
                // correctAnswer: this.answers[3],
                correctAnswer: "D. Silicon & Synapse",
                img: $('<img src="./assets/images/silicon_and_synapse.png" width="229px" height="200px">'),
            }];

            // empties question panel
            $("#question-panel").empty();

            // starts game with new question
            populateQuestionPanel();
        });
    }


});