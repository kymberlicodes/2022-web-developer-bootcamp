var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

function nextSequence() {
    userClickedPattern = [];

    level++;
    $(`h1`).text(`Level ${level}`);

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
    animatePress(randomChosenColor);
}

$(document).one('keypress', function() {
    started = true;
    nextSequence();
});

$(document).on('click', '.btn', function() {
    if (started) {
        var userChosenColor = $(this).attr("id");
        userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);
        animatePress(userChosenColor);
        checkAnswer(userClickedPattern.length-1);
    }
});

function playSound(color) {
    var audio = new Audio(`./sounds/${color}.mp3`);
    audio.play();
}

function animatePress(currentColor) {
    $(`.${currentColor}`).addClass("pressed");
    setTimeout(function() {
        $(`.${currentColor}`).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        started = false;
        $(`h1`).text(`Game Over! Press any key to restart`);
        $(`body`).addClass('game-over');
        var audio = new Audio(`./sounds/wrong.mp3`);
        audio.play();
        setTimeout(function() {
            $(`body`).removeClass('game-over');
        }, 200);
        startOver();
    }
}

function startOver() {
    $(document).one('keypress', function() {
        gamePattern = [];
        level = 0;
        started = true;
        nextSequence();
    });
}