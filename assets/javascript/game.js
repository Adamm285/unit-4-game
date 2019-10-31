var fighters = ["batman", "superman", "joker", "two-face"];
var player1 = '';
var computer = '';
var defenders = '';
var batBar= 180;
var superBar = 160;
var jokerBar = 90;
var twoFaceBar = 120;
var batDef = 30;
var superDef = 35;
var jokerDef = 25
var twoFaceDef = 20;


$(document).ready(function () {
    
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
    $(".batman, .superman, .joker, .two-face").on("click", function(){
        if ($('.player-1').is(':empty')){
            $(this).appendTo('heros')
            $('.fighters').appendTo('.player-1')
        
        }else if ($('.computer').is(':empty')){
            $(this).appendTo('.computer')
        }
    })
    $('.btn-danger').on("click", function() {
        if ($('.player-1', '.computer').is(':empty')) {
            $('gameStatus'.text("You must select your fighter!"))
        };

        var player1 ={"hp": parseInt($('.player-1').find(".hp").text()), "attack":parseInt($('.player-1').find('.atk').text())};
        var computer = {"hp" :parseInt($('.computer').find('.hp').text()), "attack":parseInt($(".computer").find('.atk').text())};

        computer.hp = computer.hp - player1.attack
        player1.hp = hero.hp - computer.attack
        hero.attack = hero.attack*2

        if(hero.hp < 1 && villain.hp > 1) {
            $('.hero').empty();
        }




    })


    // make function with name select computer for defender
});
