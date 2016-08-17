/* main JavaScript file */

/*
* FileName: App.js
*
* @author Meer Zaheen Nazmul
* @date 8/17/2016
*
* StudentID: 300522487
* website: 
* @description: Using accumulated knowledge of JavaScript and Web technologies to build a dice roller.
*/

/// </// <reference path="objects/button.ts" />

var core;
(function (core) {
    "use strict";
    var randomNumber1 = 0;
    var randomNumber2 = 0;
    var canvas;
    var stage;
    var blank;
    var blank2;
    var die1;
    var die2;
    var die3;
    var die4;
    var die5;
    var die6;
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        main();
    }
    function gameLoop() {
        if (blank == 1) {
            die1 = new createjs.Bitmap("Assets/images/1.png");
            stage.addChild(number1);
        }
        if (blank == 2) {
            die2 = new createjs.Bitmap("Assets/images/2.png");
            stage.addChild(number2);
        }
        if (blank == 3) {
            die3 = new createjs.Bitmap("Assets/images/3.png");
            stage.addChild(number3);
        }
        if (blank == 4) {
            die4 = new createjs.Bitmap("Assets/images/4.png");
            stage.addChild(number4);
        }
        if (blank == 5) {
            die5 = new createjs.Bitmap("Assets/images/5.png");
            stage.addChild(number5);
        }
        if (blank == 6) {
            die6 = new createjs.Bitmap("Assets/images/6.png");
            stage.addChild(number6);
        }
        stage.update();
    }
    function rollButton_clicked() {
        rollButton1 = Math.floor((Math.random() * 6) + 1);
        console.log(rollButton1);
        rollButton2 = Math.floor((Math.random() * 6) + 1);
        console.log(rollButton2);
    }
    function main() {

        rollButton = new createjs.Bitmap("Assets/images/rollButton.png");
        rollButton.x = 250;
        rollButton.y = 350;
        stage.addChild(rollButton);
        blank2 = new createjs.Bitmap("Assets/images/blank.png");
        blank2.x = 100;
        blank2.y = 100;
        stage.addChild(blank2);
        blank = new createjs.Bitmap("Assets/images/blank.png");
        blank.x = 400;
        blank.y = 100;
        stage.addChild(blank);
        rollButton.on("click", rollButton_clicked);
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map