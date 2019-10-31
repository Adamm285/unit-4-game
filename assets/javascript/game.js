var fighters = ["batman", "superman", "joker", "two-face"];
var player1 = '';
var computer = '';
var defenders = '';



$(document).ready(function () {
    $(".batman, .superman, .joker, .two-face").on("click", function(){
        if ($('.player-1').is(':empty')){
            $(this).appendTo('heroes')
            $('.fighters').appendTo('.player-1')
        
        }else if ($('.computer').is(':empty')){
            $(this).appendTo('.computer')
        }
    })
    $('.btn-success').on("click", function() {
        if ($('.player-1', '.computer').is(':empty')) {
            $(('gameStatus').text("You must select your fighter!"))
        };

        var player1 ={"hp": parseInt($('.player-1').find('.hp').text()), "attack":parseInt($('.player-1').find('.atk').text())};
        var computer = {"hp" :parseInt($('.computer').find('.hp').text()), "attack":parseInt($('.computer').find('.atk').text())};
console.log(player1, computer);

        computer.hp = computer.hp - player1.attack;
        player1.hp = player1.hp - computer.attack;
        player1.attack = player1.attack*2;
        computer.attack = 25;
        $('#player-hp').html("Player HP: " + player1.hp);
        $('#player-atk').html("Player Attack: " + player1.attack);
        $('#computer-hp').html("Computer HP: " + computer.hp);
        $('#computer-attack').html("Computer Attack: " + computer.attack);
console.log(player1, computer, player1.attack);


        if(player1.hp < 1 && computer.hp > 1) {
            $('.player-1').empty();
            
        }
    })
});
// for what every reason it oly lets me choose batman as player 1
// math coding broke when i tried to add it to a scoreboard instead of being inside a card.



 // for (var i = 0; i < fighters.length; i++) {
    //     var fightersBtn = $("<div>");
    //     fightersBtn.addClass("fighter-button");
    //     fightersBtn.attr("data-fighter", fighters[i]);
    //     fightersBtn.text(fighters[i]);
    //     $(".fighters").append(fightersBtn);
    // }
    // make function with name select player 1
    // for (var i = 0; i < fighters.length; i++) {
    //     var boogers = $("." + fighters[i]).detach();
    //     $(".display-1").append(boogers);
    //     // take remaining fighters and append to display-2
       
    // }