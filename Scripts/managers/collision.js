/*
    Name : Dongwan Kim, Jowon Shin
    Version : v1.6
    Last_modification : Mar 16, 2018
    Description : Changed check methods
*/
var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
            this.start();
        }
        Collision.prototype.start = function () {
        };
        Collision.prototype.update = function () {
        };
        Collision.Check = function (one, other) {
            //check to see if object is colliding
            if (other.alpha != 0) {
                if (math.Vector2.distance(one.position, other.position) < (one.centerY + other.centerY - 30)) {
                    if (!other.isColliding) {
                        other.isColliding = true;
                        if (one.name = "plane") {
                            //console.log("Crushed with " + other.name);
                            switch (other.name) {
                                case "enemy":
                                    one.life -= 1;
                                    managers.Game.scoreboardManager.Lives -= 1;
                                    createjs.Sound.play("crashSound");
                                    other.alpha = 0;
                                    break;
                                case "star":
                                    managers.Game.scoreboardManager.Score += 100;
                                    createjs.Sound.play("gettingItemSound"); //sound must be changed
                                    other.alpha = 0;
                                    if (managers.Game.HighScore <= managers.Game.scoreboardManager.Score) {
                                        managers.Game.scoreboardManager.HighScore = managers.Game.scoreboardManager.Score;
                                        managers.Game.HighScore = managers.Game.scoreboardManager.HighScore;
                                    }
                                    break;
                                case "lifeitem":
                                    one.life += 1;
                                    managers.Game.scoreboardManager.Lives += 1;
                                    createjs.Sound.play("gettingItemSound"); //sound must be changed
                                    other.alpha = 0;
                                    if (managers.Game.scoreboardManager.Lives >= 5) {
                                        managers.Game.scoreboardManager.Lives = 5;
                                    }
                                    break;
                            }
                        } //else if(one.name = "missile"){
                        //      switch(other.name){
                        //          case "enemy":
                        //          other.life -=1;
                        //          if(other.life = 0 ){
                        //              console.log("AA");
                        //              other.visible = false;
                        //          }
                        //          break;
                        //      }
                        //  }
                    }
                }
                else {
                    other.isColliding = false;
                }
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map