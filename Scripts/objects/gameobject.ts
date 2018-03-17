/*
    Name : Dongwan Kim
    Version : v1.1
    Last_modification : Mar 16, 2018
    Description : Added life property
*/

module objects{
    export class GameObject extends createjs.Bitmap{
        //PRIVATE VARIABLES
        protected _dy:number;
        protected _dx:number;
        protected _name:string;
        protected _position:math.Vector2;
        protected _isColliding:boolean;
        protected _life:number;

        //PUBLIC PROPERTIES
        public width:number;
        public height:number;
        public centerX:number;
        public centerY:number;
        public Life:number;
        //public position:createjs.Point;

        get name():string {
            return this._name;
        }

        set name(newName:string) {
            this._name = newName;
        }

        get position():math.Vector2 {
            return this._position;
        }

        set position(newPosition:math.Vector2) {
            this._position = newPosition;
        }

        get isColliding():boolean {
            return this._isColliding;
        }

        set isColliding(newState:boolean) {
            this._isColliding = newState;
        }

        get life():number{
            return this._life;
        }

        set life(newLife:number){
            this._life = newLife;
        }
        //CONSTRUTORS
        constructor(assetManager:createjs.LoadQueue, imageString:string){
            super(assetManager.getResult(imageString));
            this.name = imageString;
            this._init();
        }
        //PRIVATE METHODS
        private _init():void{
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.centerX = this.width * 0.5;
            this.centerY = this.height * 0.5;
            this.regX = this.centerX;
            this.regY = this.centerY;
            this.position = new math.Vector2(this.x, this.y);
            this.isColliding = false;
            this.Life = this._life;

        }
        //PUBLIC METHODS
        public Reset():void {
    
        }
    
        public CheckBounds():void {
    
        }
    
        public Move():void {
    
        }
    
        public Start():void {
    
        }

        public Update():void {
    
        }

    }
}