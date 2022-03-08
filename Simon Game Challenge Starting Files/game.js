var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio(`./sounds/${randomChosenColor}.mp3`);
    audio.play();
}

$(document).keypress(function() {
    nextSequence();
});

$(document).click(function(e) {
    if ($(e.target).hasClass("btn")) {
        var userChosenColor = $(e.target)[0].id;
        userClickedPattern.push(userChosenColor);
    }
});