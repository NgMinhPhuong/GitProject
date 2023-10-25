class score{
    constructor(game){
        this.game = game;
        this.Score = 0;
    }

    update(){
        
    }

    draw(){
        this.game.screen.drawName(this.game.name)
        this.game.screen.drawScore(this.Score);
    }
}   