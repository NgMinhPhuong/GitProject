class score{
    constructor(game){
        this.game = game;
        this.Score = 0;
    }

    update(){
        
    }

    draw(){
        this.game.screen.drawText(this.Score);
    }
}   