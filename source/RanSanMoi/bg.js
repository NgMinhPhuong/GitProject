class bg{
    constructor(game){
        this.game = game;
    }

    update(){
        
    }

    drawLine(startPos, endPos){
    this.game.ctx.strokeStyle = '#d9d9d9';
    this.game.ctx.lineWidth = 2;
    this.game.ctx.beginPath();
    this.game.ctx.moveTo(startPos.x, startPos.y);
    this.game.ctx.lineTo(endPos.x, endPos.y);
    this.game.ctx.stroke();
    
    }

    draw(){
    
        let firstLineX = GRID_SIZE - (this.game.snake.x % GRID_SIZE);
        let currentLineX = firstLineX;
        while( currentLineX <= GAME_WIDTH - this.game.screen.left){
            this.drawLine(
                {x: currentLineX, y: 0},
                {x: currentLineX, y:GAME_HEIGHT - this.game.screen.top}
            );
            currentLineX += GRID_SIZE;
        }
      

        let firstLineY = GRID_SIZE - (this.game.snake.y % GRID_SIZE);
        let currentLineY = firstLineY;
        while( currentLineY <= GAME_HEIGHT - this.game.screen.top){
            this.drawLine(
                {x: 0, y: currentLineY},
                {x: GAME_WIDTH - this.game.screen.left,  y: currentLineY}
            );
            currentLineY += GRID_SIZE;
        }
        
    }
}