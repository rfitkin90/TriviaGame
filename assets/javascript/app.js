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
        // correctAnswer: this.answers[2], // why isn't this working?
        correctAnswer: "C. Pong",
        img: $('<img src="./assets/images/pong.gif" class="img-fluid" style="max-height:200px; width:auto">'),
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
        correctAnswer: "A. Koji Kondo",
        img: $('<img src="./assets/images/koji_kondo.png" class="img-fluid" style="max-height:200px; width:auto">'),
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
        correctAnswer: "D. Silicon & Synapse",
        img: $('<img src="./assets/images/silicon_and_synapse.png" class="img-fluid" style="max-height:200px; width:auto">'),
    },
    {
        questionText: `Which pokémon is logged in the first slot of the pokédex?`,
        answers: [
            "A. Pikachu",
            "B. Squirtle",
            "C. Charmander",
            "D. Bulbasaur",
        ],
        correctAnswer: "D. Bulbasaur",
        img: $('<img src="./assets/images/bulbasaur.png" class="img-fluid" style="max-height:200px; width:auto">'),
    },
    {
        questionText: `Which these games features a specially engineered super-soldier who must 
        stop a rebellion staged by members of his old unit, each named after an animal (octopus, et al), 
        and whose sword-wielding friend sacrifices himself to disarm a bipedal battle robot?`,
        answers: [
            "A. Mega Man X",
            "B. Metal Gear Solid",
            "C. Both",
            "D. Neither",
        ],
        correctAnswer: "C. Both",
        img: $('<img src="./assets/images/grey_fox_and_zero.png" class="img-fluid" style="max-height:160px; width:auto">'),
    },
    {
        questionText: `"The Blue Bomber" is a nick name that refers to which of these video game characters?`,
        answers: [
            "A. Mega Man",
            "B. Sonic the Hedgehog",
            "C. Sub-Zero",
            "D. Bomberman",
        ],
        correctAnswer: "A. Mega Man",
        img: $('<img src="./assets/images/megaman.png" class="img-fluid" style="max-height:200px; width:auto">'),
    },
    {
        questionText: `In the "Castlevania" series, which of these protagonists is chronologically(in terms 
        of story timeline, not game release dates) the earliest appearing member of the Belmont Clan?`,
        answers: [
            "A. Simon Belmont",
            "B. Richter Belmont",
            "C. Leon Belmont",
            "D. Juste Belmont",
        ],
        correctAnswer: "C. Leon Belmont",
        img: $('<img src="./assets/images/leon_belmont.png" class="img-fluid" style="max-height:180px; width:auto">'),
    },
    {
        questionText: `In "Super Mario World", which color Yoshis can fly upon eating any color koopa shell?`,
        answers: [
            "A. Red",
            "B. Green",
            "C. Blue",
            "D. Yellow",
        ],
        correctAnswer: "C. Blue",
        img: $('<img src="./assets/images/blue_yoshi.png" class="img-fluid" style="max-height:200px; width:auto">'),
    },
    {
        questionText: `What was Mario originally named in his debut game, "Donkey Kong"?`,
        answers: [
            "A. Jumpman",
            "B. Plumberman",
            "C. Juan",
            "D. Miguel",
        ],
        correctAnswer: "A. Jumpman",
        img: $('<img src="./assets/images/donkey_kong.gif" class="img-fluid" style="max-height:200px; width:auto">'),
    },
    {
        questionText: `Who was the damsel in distress in the original Mario game, "Donkey Kong"?`,
        answers: [
            "A. Princess Peach",
            "B. Pauline",
            "C. Daisy",
            "D. Bowsette",
        ],
        correctAnswer: "B. Pauline",
        img: $('<img src="./assets/images/mayor_pauline.png" class="img-fluid" style="max-height:200px; width:auto">'),
    },
    {
        questionText: `As of 2018, which video game console has sold the highest number of units?`,
        answers: [
            "A. Sega Dreamcast",
            "B. Super Nintendo",
            "C. Xbox 360",
            "D. PlayStation 2",
        ],
        correctAnswer: "D. PlayStation 2",
        img: $('<img src="./assets/images/playstation_2.png" class="img-fluid" style="max-height:150px; width:auto">'),
    },
    {
        questionText: `In order to promote Windows 95, Microsoft released a promotional video of Bill Gates 
        digitally superimposed into which game?`,
        answers: [
            "A. Tetris",
            "B. Doom",
            "C. Jazz Jackrabbit",
            "D. SimCity",
        ],
        correctAnswer: "B. Doom",
        img: $('<img src="./assets/images/doom.gif" class="img-fluid" style="max-height:200px; width:auto">'),
    },
    {
        questionText: `How many unique Power Moons can be found in "Super Mario Odyssey"(excluding duplicate 
            shop purchases)?`,
        answers: [
            "A. 120",
            "B. 500",
            "C. 880",
            "D. 1000",
        ],
        correctAnswer: "C. 880",
        img: $('<img src="./assets/images/power_moon.png" class="img-fluid" style="max-height:200px; width:auto">'),
    },
    {
        questionText: `How many Korok seeds can you obtain from hidden Koroks in "The Legend of Zelda: 
        Breath of the Wild"?`,
        answers: [
            "A. 300",
            "B. 450",
            "C. 650",
            "D. 900",
        ],
        correctAnswer: "D. 900",
        img: $('<img src="./assets/images/koroks.png" class="img-fluid" style="max-height:200px; width:auto">'),
    },
    {
        questionText: `What are the names of the three pieces of the Triforce in "The Legend of Zelda"?`,
        answers: [
            "A. Courage, Wisdom, Power",
            "B. Bravery, Strength, Wit",
            "C. Tenacity, Cunning, Intellect",
            "D. Brilliance, Braun, Persistence",
        ],
        correctAnswer: "A. Courage, Wisdom, Power",
        img: $('<img src="./assets/images/triforce.png" class="img-fluid" style="max-height:200px; width:auto">'),
    },
    {
        questionText: `In the "The Idolm@ster" series, which idol became an idol to show her feminine side after 
        having been raised like a boy by her father who wished he had a son?`,
        answers: [
            "A. Haruka Amami",
            "B. Makoto Kikuchi",
            "C. Miki Hoshii",
            "D. Hibiki Ganaha",
        ],
        correctAnswer: "B. Makoto Kikuchi",
        img: $('<img src="./assets/images/makoto.png" class="img-fluid" style="max-height:180px; width:auto">'),
    },
    {
        questionText: `Formerly known as the longest standing video game world record of all time, the fastest time 
        record for "Dragster", which was recently purged from Guiness World Records for being fake, was believed to 
        be held by who?`,
        answers: [
            "A. Billy Mitchell",
            "B. Todd Rogers",
            "C. Steve Wiebe",
            "D. Robbie Lakeman",
        ],
        correctAnswer: "B. Todd Rogers",
        img: $('<img src="./assets/images/todd_rogers.jpeg" class="img-fluid" style="max-height:200px; width:auto">'),
    },
    {
        questionText: `Which of these characters is not going to be a playable character in the upcoming "Super Mash Bros. 
        Ultimate" game?`,
        answers: [
            "A. Richter Belmont",
            "B. Ridley",
            "C. Waluigi",
            "D. Ryu",
        ],
        correctAnswer: "C. Waluigi",
        img: $('<img src="./assets/images/waluigi.png" class="img-fluid" style="max-height:200px; width:auto">'),
    },
    {
        questionText: `Which of the following "Dota 2" heroes was not yet implemented into the game at the time of the 
        first "The International" tournament in 2011?`,
        answers: [
            "A. Axe",
            "B. Zeus",
            "C. Lycan",
            "D. Nightstalker",
        ],
        correctAnswer: "C. Lycan",
        img: $('<img src="./assets/images/lycan.png" class="img-fluid" style="max-height:180px; width:auto">'),
    },
    {
        questionText: `Which of the following games was not a launch title for the Nintendo 64?`,
        answers: [
            "A. Super Mario 64",
            "B. Pilotwings 64",
            "C. Wayne Gretzky's 3D Hockey",
            "D. Wave Race 64",
        ],
        correctAnswer: "D. Wave Race 64",
        img: $('<img src="./assets/images/wave_race_64.png" class="img-fluid" style="max-height:200px; width:auto">'),
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
    var questionCounter = 0;
    var timeOut = null;

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
        stop: function () {
            clearInterval(nextQuestionTimerInterval);
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
        stop: function () {
            clearInterval(roundEndTimerInterval);
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
        clearTimeout(timeOut);
        if ($(this).text() === chosenQuestion.correctAnswer) {
            clearAllIntervals();
            postGuessPanel(correctGuess, RNG);
            correctAnswers++;
        } else {
            clearAllIntervals();
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
        questionCounter++;
        timer.time = 25;

        // get rid of start button
        $("#start-button").detach();
        $(".start-row").detach();

        // populate question panel with questions and answers
        $("#question-panel").append(`<p id="question-counter">Question ${questionCounter} / 20</p>`)
        $("#question-panel").append(`<p id="question-text">${questionArray[RNG].questionText}</p>`);
        $("#question-panel").append(`<p id="answer-A" class="answer">${questionArray[RNG].answers[0]}</p>`);
        $("#question-panel").append(`<p id="answer-B" class="answer">${questionArray[RNG].answers[1]}</p>`);
        $("#question-panel").append(`<p id="answer-C" class="answer">${questionArray[RNG].answers[2]}</p>`);
        $("#question-panel").append(`<p id="answer-D" class="answer">${questionArray[RNG].answers[3]}</p>`);


        // give question panel some css
        $("#question-panel-container").css({
            "height": `${473}px`
        });
        $("#question-counter").css({
            "text-align": "center",
            "margin-bottom": `${10}px`,
        });
        $("#question-panel").css({
            "background-color": "#191a1e",
            "border-width": `${2}px`,
            "border-style": "solid",
            "border-color": "#777777",
            "position": "relative",
            "font-weight": "bold",
            "line-height": 1.3,
            "padding": `${15}px`,
            "display": "flex",
            "flex-direction": "column",
            "min-width": `${520}px`,
        });
        $("#question-text").css({
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
        timeOut = setTimeout(function () {
            if (answerHasBeenSelected === false) {
                clearAllIntervals();
                postGuessPanel(timeoutGuess, RNG);
                unansweredQuestions++;
            }
        }, 25000);
    }

    // display correct answer, whether the player was correct,
    // incorrect, or ran out of time and start a timer to display next question
    function postGuessPanel(guessOutcome, RNG) {
        
        clearTimeout(timeOut);
        $("#question-panel").css({
            "min-width": `${520}px`,
        });

        console.log(`questionArray Length: ${questionArray.length}`);

        if (questionArray.length > 1) {
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
            "width": `${142}px`,
            "margin": "auto",
            "margin-top": `${20}px`,
            "margin-bottom": `${20}px`,
            "top": 0,
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
            questionCounter = 0;
            timeOut = null;

            // redeclares original question array(since everything was spliced out to prevent repeat questions)
            questionArray = [{
                questionText: "What was the first ever game released for the Atari 2600?",
                answers: [
                    "A. Asteroids",
                    "B. Snake",
                    "C. Pong",
                    "D. Space Invaders",
                ],
                // correctAnswer: this.answers[2], // why isn't this working?
                correctAnswer: "C. Pong",
                img: $('<img src="./assets/images/pong.gif" class="img-fluid" style="max-height:200px; width:auto">'),
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
                correctAnswer: "A. Koji Kondo",
                img: $('<img src="./assets/images/koji_kondo.png" class="img-fluid" style="max-height:200px; width:auto">'),
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
                correctAnswer: "D. Silicon & Synapse",
                img: $('<img src="./assets/images/silicon_and_synapse.png" class="img-fluid" style="max-height:200px; width:auto">'),
            },
            {
                questionText: `Which pokémon is logged in the first slot of the pokédex?`,
                answers: [
                    "A. Pikachu",
                    "B. Squirtle",
                    "C. Charmander",
                    "D. Bulbasaur",
                ],
                correctAnswer: "D. Bulbasaur",
                img: $('<img src="./assets/images/bulbasaur.png" class="img-fluid" style="max-height:200px; width:auto">'),
            },
            {
                questionText: `Which these games features a specially engineered super-soldier who must 
                stop a rebellion staged by members of his old unit, each named after an animal (octopus, et al), 
                and whose sword-wielding friend sacrifices himself to disarm a bipedal battle robot?`,
                answers: [
                    "A. Mega Man X",
                    "B. Metal Gear Solid",
                    "C. Both",
                    "D. Neither",
                ],
                correctAnswer: "C. Both",
                img: $('<img src="./assets/images/grey_fox_and_zero.png" class="img-fluid" style="max-height:160px; width:auto">'),
            },
            {
                questionText: `"The Blue Bomber" is a nick name that refers to which of these video game characters?`,
                answers: [
                    "A. Mega Man",
                    "B. Sonic the Hedgehog",
                    "C. Sub-Zero",
                    "D. Bomberman",
                ],
                correctAnswer: "A. Mega Man",
                img: $('<img src="./assets/images/megaman.png" class="img-fluid" style="max-height:200px; width:auto">'),
            },
            {
                questionText: `In the "Castlevania" series, which of these protagonists is chronologically(in terms 
                of story timeline, not game release dates) the earliest appearing member of the Belmont Clan?`,
                answers: [
                    "A. Simon Belmont",
                    "B. Richter Belmont",
                    "C. Leon Belmont",
                    "D. Juste Belmont",
                ],
                correctAnswer: "C. Leon Belmont",
                img: $('<img src="./assets/images/leon_belmont.png" class="img-fluid" style="max-height:180px; width:auto">'),
            },
            {
                questionText: `In "Super Mario World", which color Yoshis can fly upon eating any color koopa shell?`,
                answers: [
                    "A. Red",
                    "B. Green",
                    "C. Blue",
                    "D. Yellow",
                ],
                correctAnswer: "C. Blue",
                img: $('<img src="./assets/images/blue_yoshi.png" class="img-fluid" style="max-height:200px; width:auto">'),
            },
            {
                questionText: `What was Mario originally named in his debut game, "Donkey Kong"?`,
                answers: [
                    "A. Jumpman",
                    "B. Plumberman",
                    "C. Juan",
                    "D. Miguel",
                ],
                correctAnswer: "A. Jumpman",
                img: $('<img src="./assets/images/donkey_kong.gif" class="img-fluid" style="max-height:200px; width:auto">'),
            },
            {
                questionText: `Who was the damsel in distress in the original Mario game, "Donkey Kong"?`,
                answers: [
                    "A. Princess Peach",
                    "B. Pauline",
                    "C. Daisy",
                    "D. Bowsette",
                ],
                correctAnswer: "B. Pauline",
                img: $('<img src="./assets/images/mayor_pauline.png" class="img-fluid" style="max-height:200px; width:auto">'),
            },
            {
                questionText: `As of 2018, which video game console has sold the highest number of units?`,
                answers: [
                    "A. Sega Dreamcast",
                    "B. Super Nintendo",
                    "C. Xbox 360",
                    "D. PlayStation 2",
                ],
                correctAnswer: "D. PlayStation 2",
                img: $('<img src="./assets/images/playstation_2.png" class="img-fluid" style="max-height:150px; width:auto">'),
            },
            {
                questionText: `In order to promote Windows 95, Microsoft released a promotional video of Bill Gates 
                digitally superimposed into which game?`,
                answers: [
                    "A. Tetris",
                    "B. Doom",
                    "C. Jazz Jackrabbit",
                    "D. SimCity",
                ],
                correctAnswer: "B. Doom",
                img: $('<img src="./assets/images/doom.gif" class="img-fluid" style="max-height:200px; width:auto">'),
            },
            {
                questionText: `How many unique Power Moons can be found in "Super Mario Odyssey"(excluding duplicate 
                    shop purchases)?`,
                answers: [
                    "A. 120",
                    "B. 500",
                    "C. 880",
                    "D. 1000",
                ],
                correctAnswer: "C. 880",
                img: $('<img src="./assets/images/power_moon.png" class="img-fluid" style="max-height:200px; width:auto">'),
            },
            {
                questionText: `How many Korok seeds can you obtain from hidden Koroks in "The Legend of Zelda: 
                Breath of the Wild"?`,
                answers: [
                    "A. 300",
                    "B. 450",
                    "C. 650",
                    "D. 900",
                ],
                correctAnswer: "D. 900",
                img: $('<img src="./assets/images/koroks.png" class="img-fluid" style="max-height:200px; width:auto">'),
            },
            {
                questionText: `What are the names of the three pieces of the Triforce in "The Legend of Zelda"?`,
                answers: [
                    "A. Courage, Wisdom, Power",
                    "B. Bravery, Strength, Wit",
                    "C. Tenacity, Cunning, Intellect",
                    "D. Brilliance, Braun, Persistence",
                ],
                correctAnswer: "A. Courage, Wisdom, Power",
                img: $('<img src="./assets/images/triforce.png" class="img-fluid" style="max-height:200px; width:auto">'),
            },
            {
                questionText: `In the "The Idolm@ster" series, which idol became an idol to show her feminine side after 
                having been raised like a boy by her father who wished he had a son?`,
                answers: [
                    "A. Haruka Amami",
                    "B. Makoto Kikuchi",
                    "C. Miki Hoshii",
                    "D. Hibiki Ganaha",
                ],
                correctAnswer: "B. Makoto Kikuchi",
                img: $('<img src="./assets/images/makoto.png" class="img-fluid" style="max-height:180px; width:auto">'),
            },
            {
                questionText: `Formerly known as the longest standing video game world record of all time, the fastest time 
                record for "Dragster", which was recently purged from Guiness World Records for being fake, was believed to 
                be held by who?`,
                answers: [
                    "A. Billy Mitchell",
                    "B. Todd Rogers",
                    "C. Steve Wiebe",
                    "D. Robbie Lakeman",
                ],
                correctAnswer: "B. Todd Rogers",
                img: $('<img src="./assets/images/todd_rogers.jpeg" class="img-fluid" style="max-height:200px; width:auto">'),
            },
            {
                questionText: `Which of these characters is not going to be a playable character in the upcoming "Super Mash Bros. 
                Ultimate" game?`,
                answers: [
                    "A. Richter Belmont",
                    "B. Ridley",
                    "C. Waluigi",
                    "D. Ryu",
                ],
                correctAnswer: "C. Waluigi",
                img: $('<img src="./assets/images/waluigi.png" class="img-fluid" style="max-height:200px; width:auto">'),
            },
            {
                questionText: `Which of the following "Dota 2" heroes was not yet implemented into the game at the time of the 
                first "The International" tournament in 2011?`,
                answers: [
                    "A. Axe",
                    "B. Zeus",
                    "C. Lycan",
                    "D. Nightstalker",
                ],
                correctAnswer: "C. Lycan",
                img: $('<img src="./assets/images/lycan.png" class="img-fluid" style="max-height:180px; width:auto">'),
            },
            {
                questionText: `Which of the following games was not a launch title for the Nintendo 64?`,
                answers: [
                    "A. Super Mario 64",
                    "B. Pilotwings 64",
                    "C. Wayne Gretzky's 3D Hockey",
                    "D. Wave Race 64",
                ],
                correctAnswer: "D. Wave Race 64",
                img: $('<img src="./assets/images/wave_race_64.png" class="img-fluid" style="max-height:200px; width:auto">'),
            }];

            // empties question panel
            $("#question-panel").empty();

            // starts game with new question
            populateQuestionPanel();
        });
    }

    function clearAllIntervals() {
        timer.stop();
        nextQuestionTimer.stop();
        roundEndTimer.stop();
    }

});