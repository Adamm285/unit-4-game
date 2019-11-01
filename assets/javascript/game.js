var fighters = ["batman", "superman", "joker", "two-face"];
var player1 = '';
var computer = '';
var defenders = '';
var playerHP = 0;
var playerATK = 0;
var computerHP = 0;
var computerATK = 0;
var gameStatus = ''
var joker;
var batman;
var superman;
var twoFace;

function gameRestart() {
    $('#gameStatus').empty()
}

$(document).ready(function () {
    $(".batman, .superman, .joker, .two-face").on("click", function () {
        if ($('.player-1').is(':empty')) {
            $(this).appendTo('heroes')
            $(this).addClass('fighters')
            $('.fighters').appendTo(".player-1")
            playerHP = parseInt($('.player-1 .fighters .hp').text())
            playerATK = parseInt($('.player-1 .fighters .atk').text())
            $('.player-hp').text(playerHP)
            console.log(playerHP);
            console.log(playerATK);

        } else if ($('.computer').is(':empty')) {
            console.log(this);

            $(this).appendTo('computer')
            $(this).addClass('defenders')
            $('.defenders').appendTo('.computer')
            computerHP = parseInt($('.computer .defenders .hp').text())
            computerATK = parseInt($('.computer .defenders .atk').text())
            $('.computer-hp').text(computerHP)
        }
    })
    $('.btn-success').on("click", function () {
        if ($('.computer').is(':empty')) {
            $('gameStatus').text("You must select your fighter!");
        } else {

            var player1 = {
                "hp": playerHP,
                "attack": playerATK
            };
            var computer = {
                "hp": computerHP,
                "attack": computerATK
            };
            console.log(player1, computer);

            computer.hp = computer.hp - player1.attack;
            player1.hp = player1.hp - computer.attack;
            playerHP = player1.hp
            player1.attack = player1.attack + 20;
            playerATK = player1.attack
            computer.attack =30;
            computerHP = computer.hp
            computerATK = computer.attack
            $('#player-hp').html("Player HP: " + player1.hp);
            $('#player-atk').html("Player Attack: " + player1.attack);
            $('#computer-hp').html("Computer HP: " + computer.hp);
            $('#computer-attack').html("Computer Attack: " + computer.attack);

            console.log(player1, computer, player1.attack);
            console.log();
        }

        if (player1.hp < 1 && computer.hp > 1) {
            $('.player-1', '.computer').empty();
            $('#gameStatus').text("You lose!");




        }
        if (player1.hp > 1 && computerHP < 1) {
            $('.player-1', '.computer').empty();
            $('#gameStatus').text("You didn't win-win!");
            
            $('.defenders').detach();

        }
    })
});





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