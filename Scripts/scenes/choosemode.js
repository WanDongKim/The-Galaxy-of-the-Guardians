/*
    Name : Dongwan Kim, Jowon Shin
    Version : v1.2
    Last_modification : Feb 25, 2018
    Description : Added a background image
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
    var chooseModeScene = /** @class */ (function (_super) {
        __extends(chooseModeScene, _super);
        //PUBLIC PROPERTIES
        //CONSTRUCTOR
        function chooseModeScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        chooseModeScene.prototype._btnNormalClick = function () {
            managers.Game.currentScene = config.Scene.PLAY;
        };
        chooseModeScene.prototype._btnHellClick = function () {
            managers.Game.currentScene = config.Scene.PLAY;
        };
        chooseModeScene.prototype._btnBackClick = function () {
            managers.Game.currentScene = config.Scene.OPENING;
        };
        //PUBLIC METHODS
        chooseModeScene.prototype.Start = function () {
            this._background = new objects.Background(this.assetManager);
            this._logo = new objects.Button(this.assetManager, "logo", 320, 220);
            this._btnNormal = new objects.Button(this.assetManager, "btnNormal", 200, 400);
            this._btnHell = new objects.Button(this.assetManager, "btnHell", 440, 400);
            this._btnBack = new objects.Button(this.assetManager, "btnBack", 530, 80);
            this.Main();
            console.log("start");
        };
        chooseModeScene.prototype.Update = function () {
        };
        chooseModeScene.prototype.Main = function () {
            this.addChild(this._background);
            this.addChild(this._btnNormal);
            this.addChild(this._btnHell);
            this.addChild(this._btnBack);
            this.addChild(this._logo);
            this._btnNormal.on("click", this._btnNormalClick);
            this._btnHell.on("click", this._btnHellClick);
            this._btnBack.on("click", this._btnBackClick);
        };
        return chooseModeScene;
    }(objects.Scene));
    scenes.chooseModeScene = chooseModeScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=choosemode.js.map