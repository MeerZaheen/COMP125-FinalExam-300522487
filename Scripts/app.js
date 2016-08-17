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
    var canvas;
    var stage;
    var rollButton;
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
        stage.update();
    }
    function rollButton_clicked() {
        die1 = Math.floor((Math.random() * 6) + 1);
        console.log(die1);
        die2 = Math.floor((Math.random() * 6) + 1);
        console.log(die1);
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
        die1 = new createjs.Bitmap("Assets/images/1.png");
        die1.x = 400;
        die1.y = 100;
        stage.addChild(die1);
        die2 = new createjs.Bitmap("Assets/images/2.png");
        die2.x = 400;
        die2.y = 100;
        stage.addChild(die2);
        die3 = new createjs.Bitmap("Assets/images/3.png");
        die3.x = 400;
        die3.y = 100;
        stage.addChild(die3);
        die4 = new createjs.Bitmap("Assets/images/4.png");
        die4.x = 400;
        die4.y = 100;
        stage.addChild(die4);
        die5 = new createjs.Bitmap("Assets/images/5.png");
        die5.x = 400;
        die5.y = 100;
        stage.addChild(die5);
        die6 = new createjs.Bitmap("Assets/images/6.png");
        die6.x = 400;
        die6.y = 100;
        rollButton.on("click", rollButton_clicked);
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map