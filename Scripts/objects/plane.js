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
    Version : v1.3
    Last_modification : Mar 16 2018
    Description : Deleted life private variable and connected with gameobject life
*/
var objects;
(function (objects) {
    var Plane = /** @class */ (function (_super) {
        __extends(Plane, _super);
        //CONSTRUTOR
        function Plane(assetManager) {
            var _this = _super.call(this, assetManager, "plane") || this;
            _this.life = 3;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Plane, "centerX", {
            //PRIVATE VARIABLES
            //PUBLIC PROPERTIES
            get: function () {
                return this.centerX;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Plane, "centerY", {
            get: function () {
                return this.centerY;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Plane.prototype, "Life", {
            get: function () {
                return this.life;
            },
            enumerable: true,
            configurable: true
        });
        //PRIVATE METHODS
        //PUBLIC METHODS
        Plane.prototype.Reset = function () {
        };
        Plane.prototype.CheckBounds = function () {
            if (this.x >= 640 - this.centerX) {
                this.x = 640 - this.centerX;
            }
            if (this.x < this.centerX) {
                this.x = this.centerX;
            }
            if (this.y >= 480 - this.centerY) {
                this.y = 480 - this.centerY;
            }
            if (this.y < this.centerY) {
                this.y = this.centerY;
            }
        };
        Plane.prototype.Move = function () {
            if (managers.Game.keyboardManager.moveLeft) {
                this.x -= 10;
            }
            if (managers.Game.keyboardManager.moveRight) {
                this.x += 10;
            }
            if (managers.Game.keyboardManager.moveForward) {
                this.y += 10;
            }
            if (managers.Game.keyboardManager.moveBackward) {
                this.y -= 10;
            }
        };
        Plane.prototype.Start = function () {
            this.x = 300;
            this.y = 430;
        };
        Plane.prototype.Update = function () {
            this.position = new math.Vector2(this.x, this.y);
            this.Move();
            this.CheckBounds();
        };
        return Plane;
    }(objects.GameObject));
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map