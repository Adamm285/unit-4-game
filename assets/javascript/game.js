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
    $('#gameStatus').remove()
}

$(document).ready(function () {
    console.log($('.player-1').is(':empty'));

    $(".batman, .superman, .joker, .two-face").on("click", function () {
        if (player1 == '') {
            player1 = {
                "hp": playerHP,
                "attack": playerATK
            };
            $(this).addClass('fighters')
            $('.fighters').appendTo(".player-1")
            playerHP = parseInt($('.player-1 .fighters .hp').text())
            playerATK = parseInt($('.player-1 .fighters .atk').text())
            $('.player-hp').text(playerHP)
            console.log(playerHP);
            console.log(playerATK);
            console.log($('.player-1').is(':empty'));
        } else if (computer == '') {
            console.log(this);
            computer = {
                "hp": computerHP,
                "attack": computerATK
            };
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

            player1 = {
                "hp": playerHP,
                "attack": playerATK
            };
            computer = {
                "hp": computerHP,
                "attack": computerATK
            };

            console.log(player1, computer);

            computer.hp = computer.hp - player1.attack;
            player1.hp = player1.hp - computer.attack;
            playerHP = player1.hp
            player1.attack = player1.attack + 20;
            playerATK = player1.attack
            computer.attack = 25;
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
            $('#results').text("You lose!");
            alert("you lost!")
            window.location.reload(true);
        }
        if (player1.hp > 1 && computer.hp < 1) {
            computer = '';
            computerHP= 0;
            computerATK = 0;
            console.log(computerHP);
            
            $('.player-1', '.computer').remove();
            $('#player-hp').html("Player HP: " + player1.hp);
            $('#player-atk').html("Player Attack: " + player1.attack);
            $('#computer-hp').html("Computer HP: " + computerHP);
            $('#computer-attack').html("Computer Attack: " + computerATK);
            $('.defenders').detach();
            alert("you won")
            

            // $('#results').text("pick another fighter");

        }
        if (player1.hp < 1 && computer.hp < 1) {
            $('.player-1', '.computer').empty();
            $('#player-hp').html("Player HP: " + player1.hp);
            $('#player-atk').html("Player Attack: " + player1.attack);
            $('#computer-hp').html("Computer HP: " + computer.hp);
            $('#computer-attack').html("Computer Attack: " + computer.attack);
            $('.defenders').detach();
            alert("you tied")
            window.location.reload(true);
        }

    })

});