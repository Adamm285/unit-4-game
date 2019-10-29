var fighters = ["batman", "superman", "joker", "two-face"];
var player1 = '';
var computer = '';
var defenders = '';


$(document).ready(function () {
    // for (var i = 0; i < fighters.length; i++) {
    //     var fightersBtn = $("<div>");
    //     fightersBtn.addClass("fighter-button");
    //     fightersBtn.attr("data-fighter", fighters[i]);
    //     fightersBtn.text(fighters[i]);
    //     $(".fighters").append(fightersBtn);
    // }
    // make function with name select player 1
    for (var i = 0; i < fighters.length; i++) {
        var boogers = $("." + fighters[i]).detach();
        $(".display-1").append(boogers);
        // take remaining fighters and append to display-2

    }
    // make function with name select computer for defender
});