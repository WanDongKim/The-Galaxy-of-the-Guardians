/*
    Name : Dongwan Kim, Changmin Shin, Jowon Shin
    Version : v2.3
    Last_modification : Mar 16, 2018
    Description : Added Life Item and Set Success Condition
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
    var StageOneScene = /** @class */ (function (_super) {
        __extends(StageOneScene, _super);
        //PUBLIC PROPERTIES
        //CONSTRUCTOR
        function StageOneScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        StageOneScene.prototype._bulletFire = function (back) {
            this._missile[this._missileCount].x = managers.Game.stage.mouseX;
            this._missile[this._missileCount].y = managers.Game.stage.mouseY - back;
            this._missileCount++;
            if (this._missileCount >= this._missileNum - 1) {
                this._missileCount = 0;
                this._missileSound = createjs.Sound.play("missileSound");
                this._missileSound.loop = -1;
                this._missileSound.volume = 0.2;
            }
        };
        StageOneScene.prototype._sucessStage = function () {
            if (this._scoreBoard.Score >= 300) {
                managers.Game.currentScene = config.Scene.PLAY_TWO;
                this._backgroundSound.stop();
                this._missileSound.stop();
                //TODO: Build a new scene ? or display a congratulation label?
            }
        };
        //PUBLIC METHODS
        StageOneScene.prototype.Start = function () {
            this._missileNum = 5;
            this._missileCount = 0;
            this._background = new objects.Background(this.assetManager);
            this._plane = new objects.Plane(this.assetManager);
            this._star = new objects.Star(this.assetManager);
            this._lifeItem = new objects.LifeItem(this.assetManager);
            this._enemyNum = 3;
            this._enemy = new Array();
            this._missile = new Array();
            this._bulletFire = this._bulletFire.bind(this);
            for (var count = 0; count < this._enemyNum; count++) {
                this._enemy[count] = new objects.Enemy(this.assetManager);
            }
            this._collision = new managers.Collision();
            this._backgroundSound = createjs.Sound.play("backgroundSound");
            this._backgroundSound.loop = -1;
            this._backgroundSound.volume = 0.5;
            this._scoreBoard = new managers.ScoreBoard;
            managers.Game.scoreboardManager = this._scoreBoard;
            this.Main();
        };
        StageOneScene.prototype.Update = function () {
            var _this = this;
            this._background.Update();
            this._plane.Update();
            this._star.Update();
            this._lifeItem.Update();
            //check collision between plane and star
            managers.Collision.Check(this._plane, this._star);
            if (this._star.isColliding) {
                this._star.visible = false;
            }
            //check collision between plane and a life item
            managers.Collision.Check(this._plane, this._lifeItem);
            if (this._lifeItem.isColliding) {
                this._lifeItem.visible = false;
            }
            this._enemy.forEach(function (enemy) {
                enemy.Update();
                //managers.Collision.Check(this._plane, enemy);
                if (enemy.isColliding) {
                    enemy.visible = false;
                    _this.removeChild(enemy);
                }
                if (_this._plane.Life == 0) {
                    managers.Game.currentScene = config.Scene.GAMEOVER;
                    _this._backgroundSound.stop();
                    _this._missileSound.stop();
                }
            });
            this._missile.forEach(function (missile) {
                missile.position.x = _this._plane.x;
                missile.position.y = _this._plane.y;
                missile.Update();
            });
            this._collision.crush(this._missile, this._enemy);
            if (this._scoreBoard.Lives <= 0) {
                managers.Game.currentScene = config.Scene.GAMEOVER;
                this._backgroundSound.stop();
                this._missileSound.stop();
            }
            this._sucessStage();
        };
        StageOneScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this._background);
            this.addChild(this._star);
            this.addChild(this._lifeItem);
            for (var count = 0; count < this._missileNum; count++) {
                this._missile[count] = new objects.Missile(this.assetManager);
                this.addChild(this._missile[count]);
                this._bulletFire(count * 80);
            }
            this.addChild(this._plane);
            this._enemy.forEach(function (enemy) {
                _this.addChild(enemy);
            });
            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
        };
        return StageOneScene;
    }(objects.Scene));
    scenes.StageOneScene = StageOneScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play_one.js.map