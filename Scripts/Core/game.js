/*
    Name : Dongwan Kim, Jowon Shin, Changmin Shin
    Version : v2.3
    Last_modification : Feb 26, 2018
    Description : Changed image names due to live site
*/
/// <reference path="_reference.ts"/>
(function () {
    //Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest;
    var currentScene;
    var currentState;
    var keyBoardManager;
    assetManifest = [
        { id: "imgLogo", src: "./Assets/images/logo.png" },
        { id: "btnStart", src: "./Assets/images/btnStart.png" },
        { id: "background", src: "./Assets/images/background.png" },
        { id: "btnNormal", src: "./Assets/images/btnNormal.png" },
        { id: "btnHell", src: "./Assets/images/btnUltimate.png" },
        { id: "btnBack", src: "./Assets/images/btnBack.png" },
        { id: "btnPlayAgain", src: "./Assets/images/btnPlayAgain.png" },
        { id: "missile", src: "./Assets/images/missile.png" },
        { id: "plane", src: "./Assets/images/PlayerShip.png" },
        { id: "star", src: "./Assets/images/star.png" },
        { id: "lifeitem", src: "./Assets/images/lifeItem.png" },
        { id: "enemy", src: "./Assets/images/enemyA.png" },
        { id: "logo", src: "./Assets/images/logo.png" },
        { id: "backgroundSound", src: "./Assets/sounds/background.mp3" },
        { id: "missileSound", src: "./Assets/sounds/missileSound.mp3" },
        { id: "bazoozaSound", src: "./Assets/sounds/bazookaSound.mp3" },
        { id: "crashSound", src: "./Assets/sounds/crashSound.mp3" },
        { id: "tadaSound", src: "./Assets/sounds/tada.mp3" },
        { id: "gettingItemSound", src: "./Assets/sounds/gettingItem.wav" }
    ];
    //preload Assets
    function Init() {
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
        console.log("start");
    }
    function Start() {
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        managers.Game.stage = stage;
        managers.Game.currentScene = config.Scene.LOADING;
        currentState = config.Scene.LOADING;
        keyBoardManager = new managers.Keyboard();
        managers.Game.keyboardManager = keyBoardManager;
        Main();
    }
    function Update() {
        if (currentState != managers.Game.currentScene) {
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function Main() {
        stage.removeAllChildren();
        switch (managers.Game.currentScene) {
            case config.Scene.LOADING:
                currentScene = new scenes.loadingScene(assetManager);
                break;
            case config.Scene.OPENING:
                currentScene = new scenes.openingScene(assetManager);
                break;
            case config.Scene.CHOOSEMODE:
                currentScene = new scenes.chooseModeScene(assetManager);
                break;
            case config.Scene.PLAY:
                currentScene = new scenes.playScene(assetManager);
                break;
            case config.Scene.GAMEOVER:
                currentScene = new scenes.GameOverScene(assetManager);
                break;
        }
        currentState = managers.Game.currentScene;
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map