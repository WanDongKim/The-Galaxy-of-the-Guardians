/*
    Name : Dongwan Kim, Jowon Shin
    Version : v1.1
    Last_modification : Feb 22, 2018
    Description : Created Back Button
*/

module scenes{
    export class chooseModeScene extends objects.Scene{
        //PRIVATE VARIABLES
        private _btnNormal: objects.Button;
        private _btnHell: objects.Button;
        private _btnBack: objects.Button;
        //PUBLIC PROPERTIES

        //CONSTRUCTOR
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager)
            this.Start();
        }

        //PRIVATE METHODS
        private _btnNormalClick():void{
            objects.Game.currentScene = config.Scene.PLAY;
        }

        private _btnHellClick():void{
            objects.Game.currentScene = config.Scene.PLAY;
        }

        private _btnBackClick():void {
            objects.Game.currentScene = config.Scene.OPENING;
        }

        //PUBLIC METHODS
        public Start():void{
            this._btnNormal = new objects.Button(this.assetManager, "btnNormal", 200, 340);
            this._btnHell = new objects.Button(this.assetManager, "btnHell", 440, 340);
            this._btnBack = new objects.Button(this.assetManager, "btnBack", 500, 100);
            this.Main();
            console.log("start");
        }

        public Update():void{

        }
        public Main():void{
            this.addChild(this._btnNormal);
            this.addChild(this._btnHell);
            this.addChild(this._btnBack);
    
            this._btnNormal.on("click", this._btnNormalClick);
            this._btnHell.on("click",this._btnHellClick);
            this._btnBack.on("Click", this._btnBackClick);
        }
        // public Init():void{

        // }
    }
}