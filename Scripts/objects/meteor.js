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
    Name : Chamgin Shin
    Version : v1.1
    Last_modification : April 6, 2018
    Description : Set the visibility when they reset
*/
var objects;
(function (objects) {
    var Meteor = /** @class */ (function (_super) {
        __extends(Meteor, _super);
        // private instance variables
        // public properties
        // Constructor
        function Meteor() {
            var _this = _super.call(this, "meteorsmall") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        Meteor.prototype.Start = function () {
            this._dy = 1;
            this.Reset();
        };
        // updates the game object every frame
        Meteor.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        Meteor.prototype.Reset = function () {
            this.alpha = 1;
            this.x = Math.floor((Math.random() * (640 - this.width)) + this.centerY);
            this.y = -this.height;
        };
        // move the object to some new location
        Meteor.prototype.Move = function () {
            this.position = new math.Vector2(this.x, this.y);
            this.y += this._dy;
        };
        // check to see if some boundary has been passed
        Meteor.prototype.CheckBounds = function () {
            // check lower bounds
            if (this.y >= 480 + this.height) {
                this.Reset();
            }
        };
        return Meteor;
    }(objects.GameObject));
    objects.Meteor = Meteor;
})(objects || (objects = {}));
//# sourceMappingURL=meteor.js.map