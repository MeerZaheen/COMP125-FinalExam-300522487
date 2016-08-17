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

module core {
    "use strict";

    let canvas: HTMLElement;
    let stage: createjs.Stage;
    let rollButton;
    let blank1;


    // app entry function
    function init(): void {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        main();
    }

    function gameLoop(): void {

        stage.update();
    }

    function main(): void {
        //roll button object
        rollButton = new createjs.Bitmap("Assets/images/rollButton.png");

        rollButton.x = 330;
        rollButton.y = 240;
        stage.addChild(rollButton);

        blank1 = new createjs.Bitmap("../Assets/images/blank.png");
        blank1.x = 20;
        blank1.y = 20;
        stage.addChild(blank1);

    }

    window.addEventListener("load", init);

}