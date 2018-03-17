/*
    Name : Jowon Shin
    Version : v1.2
    Last_modification : Feb 23, 2018
    Description : added High Score Label
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var GameOverScene = /** @class */ (function (_super) {
        __extends(GameOverScene, _super);
        //PUBLIC PROPERTIES
        //CONSTRUCTOR
        function GameOverScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        GameOverScene.prototype._btnPlayAgainClick = function () {
            managers.Game.currentScene = config.Scene.OPENING;
        };
        //PUBLIC METHODS
        GameOverScene.prototype.Start = function () {
            this._btnPlayAgain = new objects.Button(this.assetManager, "btnPlayAgain", 320, 360);
            this._lblGameOver = new objects.Label("Game Over", "40px", "Consolas", "#FF0000", 320, 240, true);
            this._lblScore = new objects.Label("High Score: ", "40px", "Consolas", "#FF0000", 190, 120, false);
            this._scoreboard = new managers.ScoreBoard;
            this.Main();
            console.log("game over");
        };
        GameOverScene.prototype.Update = function () {
        };
        GameOverScene.prototype.Main = function () {
            createjs.Sound.play("tadaSound"); //must be changed
            this.addChild(this._lblGameOver);
            this.addChild(this._btnPlayAgain);
            this._scoreboard.HighScore = managers.Game.HighScore;
            this._lblScore.text += this._scoreboard.HighScore;
            this.addChild(this._lblScore);
            this._btnPlayAgain.on("click", this._btnPlayAgainClick);
        };
        return GameOverScene;
    }(objects.Scene));
    scenes.GameOverScene = GameOverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map