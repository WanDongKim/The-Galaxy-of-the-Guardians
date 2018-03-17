/*
    Name : Dongwan Kim
    Version : v1.1
    Last_modification : Mar 16, 2018
    Description : Added life property
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
var objects;
(function (objects) {
    var GameObject = /** @class */ (function (_super) {
        __extends(GameObject, _super);
        //CONSTRUTORS
        function GameObject(assetManager, imageString) {
            var _this = _super.call(this, assetManager.getResult(imageString)) || this;
            _this.name = imageString;
            _this._init();
            return _this;
        }
        Object.defineProperty(GameObject.prototype, "name", {
            //public position:createjs.Point;
            get: function () {
                return this._name;
            },
            set: function (newName) {
                this._name = newName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "position", {
            get: function () {
                return this._position;
            },
            set: function (newPosition) {
                this._position = newPosition;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "isColliding", {
            get: function () {
                return this._isColliding;
            },
            set: function (newState) {
                this._isColliding = newState;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "life", {
            get: function () {
                return this._life;
            },
            set: function (newLife) {
                this._life = newLife;
            },
            enumerable: true,
            configurable: true
        });
        //PRIVATE METHODS
        GameObject.prototype._init = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.centerX = this.width * 0.5;
            this.centerY = this.height * 0.5;
            this.regX = this.centerX;
            this.regY = this.centerY;
            this.position = new math.Vector2(this.x, this.y);
            this.isColliding = false;
            this.Life = this._life;
        };
        //PUBLIC METHODS
        GameObject.prototype.Reset = function () {
        };
        GameObject.prototype.CheckBounds = function () {
        };
        GameObject.prototype.Move = function () {
        };
        GameObject.prototype.Start = function () {
        };
        GameObject.prototype.Update = function () {
        };
        return GameObject;
    }(createjs.Bitmap));
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map