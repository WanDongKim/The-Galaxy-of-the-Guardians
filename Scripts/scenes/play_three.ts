/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Apr 05, 2018
    Description : Created third stage scene
*/

module scenes {
    export class StageThreeScene extends objects.Scene {
        //PRIVATE VARIABLES
        private _background: objects.Background;
        private _plane: objects.Plane;
        private _enemy: objects.Enemy[];
        private _enemyNum: number;
        private _star: objects.Star;
        private _lifeItem: objects.LifeItem;

        private _missile: objects.Missile[];
        private _missileNum: number;
        private _missileCount: number;


        private _backgroundSound: createjs.AbstractSoundInstance;
        private _missileSound: createjs.AbstractSoundInstance;
        private _scoreBoard: managers.ScoreBoard;
        //PUBLIC PROPERTIES

        //CONSTRUCTOR
        constructor() {
            super();

            this.Start();

        }
        //PRIVATE METHODS
        private _bulletFire(back: number): void {
            this._missile[this._missileCount].x = managers.Game.stage.mouseX;
            this._missile[this._missileCount].y = managers.Game.stage.mouseY - back;

            this._missileCount++;
            if (this._missileCount >= this._missileNum - 1) {
                this._missileCount = 0;
                this._missileSound = createjs.Sound.play("missileSound");
                this._missileSound.loop = -1;
                this._missileSound.volume = 0.2;
            }
        }

        private _sucessStage():void{
            
            if(this._scoreBoard.Score >= 9000) {                
                managers.Game.currentScene = config.Scene.GAMEOVER; 
                //TODO: Build a new scene ? or display a congratulation label?
                this._backgroundSound.stop();
                this._missileSound.stop();
            }
        }
        //PUBLIC METHODS
        public Start(): void {
            console.log("Stage two");
            this._missileNum = 5;
            this._missileCount = 0;
            this._background = new objects.Background(this.assetManager);
            this._plane = new objects.Plane();
            this._star = new objects.Star();
            this._lifeItem = new objects.LifeItem();
            this._enemyNum = 5;
            this._enemy = new Array<objects.Enemy>();
            this._missile = new Array<objects.Missile>();
            this._bulletFire = this._bulletFire.bind(this);

            for (let count = 0; count < this._enemyNum; count++) {
                this._enemy[count] = new objects.Enemy();
            }

            this._backgroundSound = createjs.Sound.play("backgroundSound")
            this._backgroundSound.loop = -1;
            this._backgroundSound.volume = 0.5;

            this._scoreBoard = new managers.ScoreBoard;
            this._scoreBoard = managers.Game.scoreboardManager;

            this.Main();
        }

        public Update(): void {
            this._background.Update();
            this._plane.Update();
            this._star.Update();
            this._lifeItem.Update();

            //check collision between plane and star
            managers.Collision.Check(this._plane, this._star);


            //check collision between plane and a life item
            managers.Collision.Check(this._plane, this._lifeItem);


            this._enemy.forEach(enemy => {
                enemy.Update();
                enemy.Dy+=0.07;
                managers.Collision.Check(this._plane, enemy);

                if (this._plane.Life == 0) {
                    managers.Game.currentScene = config.Scene.GAMEOVER;
                    this._backgroundSound.stop();
                    this._missileSound.stop();
                }
            });
            //this._collision.check(this._missile,this._enemy);
            
            this._missile.forEach(missile => {
                missile.position.x = this._plane.x;
                missile.position.y = this._plane.y;
                missile.Update();
            });
            managers.Collision.Crush(this._missile,this._enemy);
            if (this._scoreBoard.Lives <= 0) {
                managers.Game.currentScene = config.Scene.GAMEOVER;
                this._backgroundSound.stop();
                this._missileSound.stop();
            }
            
            this._sucessStage();
 

        }
        public Main(): void {
            this.addChild(this._background);
            this.addChild(this._star);
            this.addChild(this._lifeItem);

            for (let count = 0; count < this._missileNum; count++) {
                this._missile[count] = new objects.Missile();

                this.addChild(this._missile[count]);
                this._bulletFire(count * 80);
            }

            this.addChild(this._plane);

            this._enemy.forEach(enemy => {
                this.addChild(enemy);
            });

            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
        }


    }
}
