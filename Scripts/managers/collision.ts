/*
    Name : Dongwan Kim, Jowon Shin
    Version : v1.6
    Last_modification : Mar 16, 2018
    Description : Changed check methods
*/
module managers {
    export class Collision {
        constructor() {

            this.start();
        }

        public start() {

        }

        public update() {

        }

        public static Check(one: objects.GameObject, other: objects.GameObject) {
            //check to see if object is colliding
            if (math.Vector2.distance(one.position, other.position) < (one.centerY + other.centerY - 30)) {
                if (!other.isColliding) {

                    other.isColliding = true;
                    if(one.name = "plane"){
                        //console.log("Crushed with " + other.name);

                        switch (other.name) {
                            case "enemy":
                                    one.life -= 1;
                                    managers.Game.scoreboardManager.Lives -= 1;
                                    createjs.Sound.play("crashSound");                           
                                break;
                            case "star":
                                managers.Game.scoreboardManager.Score += 100;
                                createjs.Sound.play("gettingItemSound"); //sound must be changed
                                if (managers.Game.HighScore <= managers.Game.scoreboardManager.Score) {
                                    managers.Game.scoreboardManager.HighScore = managers.Game.scoreboardManager.Score;
                                    managers.Game.HighScore = managers.Game.scoreboardManager.HighScore;
                                }
                                break;
                            case "lifeitem":
                            one.life += 1;
                            managers.Game.scoreboardManager.Lives += 1;
                                createjs.Sound.play("gettingItemSound"); //sound must be changed
                                if(managers.Game.scoreboardManager.Lives >= 5) {
                                    managers.Game.scoreboardManager.Lives = 5;
                                }
                                break;
                        }
                      }
                }
            }
            else {
                other.isColliding = false;
            }
        }

        public crush(missile:objects.Missile[], enemy:objects.Enemy[]){
             //check to see if object is colliding

              missile.forEach(missiles => {
                  enemy.forEach(enemies =>{
                    //console.log("missile - enemy");
                    
                    if(math.Vector2.distance(missiles.position, enemies.position) > (missiles.centerY + enemies.centerY - 30)){
                        console.log("Missile collided with an enemy");
                        if(!enemies.isColliding){
                            enemies.isColliding = true;
                            enemies.life -=1
                            if(enemies.life =0){
                                enemies.visible = false;
                            }
                        }
                    }else{
                        enemies.isColliding = false;
                    }
                  });
            });
        }
    }
}