/*
    Name : Dongwan Kim
    Version : v1.2
    Last_modification : Feb 25, 2018
    Description : Added a background and label
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
    var openingScene = /** @class */ (function (_super) {
        __extends(openingScene, _super);
        //PUBLIC PROPERTIES
        //CONSTRUCTOR
        function openingScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        openingScene.prototype._btnStartClick = function () {
            managers.Game.currentScene = config.Scene.CHOOSEMODE;
        };
        //PUBLIC METHODS
        openingScene.prototype.Start = function () {
            this._background = new objects.Background(this.assetManager);
            this._logo = new objects.Button(this.assetManager, "logo", 320, 220);
            this._openingLogo = new objects.Label("The Galaxy of the Guardians", "30px", "Consolas", "#FFFFFF", 100, 310);
            this._btnStart = new objects.Button(this.assetManager, "btnStart", 320, 390);
            this.Main();
            console.log("start");
        };
        openingScene.prototype.Update = function () {
        };
        openingScene.prototype.Main = function () {
            this.addChild(this._background);
            this.addChild(this._openingLogo);
            this.addChild(this._btnStart);
            this.addChild(this._logo);
            this._btnStart.on("click", this._btnStartClick);
        };
        return openingScene;
    }(objects.Scene));
    scenes.openingScene = openingScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=opening.js.map