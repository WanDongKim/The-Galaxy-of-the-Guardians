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
/*
    Name : Dongwan Kim
    Version : v1.2
    Last_modification : Mar 16, 2018
    Description : Added life value
*/
var objects;
(function (objects) {
    var Enemy = /** @class */ (function (_super) {
        __extends(Enemy, _super);
        //PRIVATE VARIABLES
        //PUBLIC PROPERTIES
        //CONSTRUCTORS
        function Enemy(assetManager) {
            var _this = _super.call(this, assetManager, "enemy") || this;
            _this.Start();
            _this.life = 2;
            return _this;
        }
        //PRIVATE METHODS
        //PUBLIC METHODS
        Enemy.prototype.Move = function () {
            this.x += this._dx;
            this.y += this._dy;
        };
        Enemy.prototype.Start = function () {
            this.Reset();
        };
        Enemy.prototype.Reset = function () {
            this.visible = true;
            this.x = (Math.random() * (640 - this.width)) + this.centerX;
            this.y = -this.height;
            this._dx = (Math.random() * -4) + 2;
            this._dy = (Math.random() * 5) + 5;
        };
        Enemy.prototype.CheckBounds = function () {
            //check the bottom border
            if (this.y >= 480 + this.height) {
                this.Reset();
            }
        };
        Enemy.prototype.Update = function () {
            this.position = new math.Vector2(this.x, this.y);
            this.Move();
            this.CheckBounds();
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map