# RPG-game

![Project Image](https://wallpapercave.com/wp/wp2412746.jpg)

> Role playing Game, chose your player then chose your opponent beat all the other characters to win.

---

### Table of Contents

- [Description](#description)
- [How To Use](#how-to-use)
- [License](#license)
- [Author Info](#author-info)

---

## Description

Fun Weekend Project- Built using simple JavaScript logic

#### Technologies

- JavaScript
- Html
- CSS

[Back To The Top](#RPG-game)

---

## How To Use

#### Installation

Click live link [here](https://adamm285.github.io/unit-4-game/)

#### API Reference

```    $(".batman, .superman, .joker, .two-face").on("click", function () {
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
```
[Back To The Top](#RPG-game)

---

## License

MIT License

Copyright (c) [2020] [Adam M Murphy]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[Back To The Top](#RPG-game)

---

## Author Info

- LinkedIn - [@AdamMurphy](https://Linkedin.com/in/Adam-Murphy-73690bbb/)
- Website - [Adam M Murphy](https://adamm285.github.io/AdamMurphy'sPortfolio/)
- Resume - [Adam Murphy Software Developer](https://docs.google.com/document/d/1GLxDLwlrQkmdugH2Xl9MsOv5Rz6rmzqqSrbzfTZ-R3E/edit?usp=sharing)

[Back To The Top](#RPG-game)
