/*
    Name : Dongwan Kim
    Version : v1.3
    Last_modification : Mar 16 2018
    Description : Deleted life private variable and connected with gameobject life
*/
module objects{
    export class Plane extends objects.GameObject {
        //PRIVATE VARIABLES
        //PUBLIC PROPERTIES
            public static get centerX():number{
                return this.centerX;
            }
            public static get centerY():number{
                return this.centerY;
            }
            public get Life():number{
                return this.life;
            }
        //CONSTRUTOR
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager,"plane");
            this.life = 3;
            this.Start();
        }
        //PRIVATE METHODS
         
        //PUBLIC METHODS
        public Reset():void{

        }
        public CheckBounds():void{
            if(this.x >= 640 - this.centerX){
                this.x = 640-this.centerX;
            }
            if(this.x< this.centerX){
                this.x = this.centerX
            }
            if(this.y >= 480 - this.centerY){
                this.y = 480 - this.centerY;
            }
            if(this.y < this.centerY){
                this.y = this.centerY;
            }
        }
        public Move():void{

            if(managers.Game.keyboardManager.moveLeft){
                this.x -= 10;
            }
            if(managers.Game.keyboardManager.moveRight){
                this.x += 10;
            }
            if(managers.Game.keyboardManager.moveForward){
                this.y += 10;
            }
            if(managers.Game.keyboardManager.moveBackward){
                this.y -= 10;
            }
        }
        public Start():void{
            this.x = 300;
            this.y = 430;
        }
        public Update():void{
            this.position = new math.Vector2(this.x, this.y);
            this.Move();
            this.CheckBounds();
        }
        

    }
}