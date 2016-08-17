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
    var die1;
    var die2;
    var die1result;
    var die2result;
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
        rollButton.x = 330;
        rollButton.y = 240;
        blank = new createjs.Bitmap("Assets/images/blank.png");
        stage.addChild(blank);
        stage.addChild(rollButton);
        die1 = new createjs.Text(die1);
        stage.addChild(die1);
        rollButton.on("click", rollButton_clicked);
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map