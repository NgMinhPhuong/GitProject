class Lazer{
    constructor(snake){
        this.snake = snake;
        this.lazer_e1 = {};
        this.lazer_e2 = {};
    }

    update(){
       
        this.lazer_e1.xStart = this.snake.eye.e1.x - this.snake.game.screen.left;
        this.lazer_e1.xEnd = this.lazer_e1.xStart;

        this.lazer_e1.yStart = this.snake.eye.e1.y - this.snake.game.screen.top; 
        this.lazer_e1.yEnd = this.lazer_e1.yStart;

        this.lazer_e2.xStart = this.snake.eye.e2.x - this.snake.game.screen.left;
        this.lazer_e2.xEnd = this.lazer_e2.xStart;

        this.lazer_e2.yStart = this.snake.eye.e2.y - this.snake.game.screen.top;
        this.lazer_e2.yEnd = this.lazer_e2.yStart;
        while(this.lazer_e1.xEnd >= 0 && this.lazer_e1.xEnd <= SCREEN_WIDTH
            && this.lazer_e1.yEnd >= 0 && this.lazer_e1.yEnd <= SCREEN_HEIGHT)
            {
                this.lazer_e1.xEnd = this.lazer_e1.xEnd + Math.cos(this.snake.angel)
                this.lazer_e1.yEnd = this.lazer_e1.yEnd + Math.sin(this.snake.angel)
            }
        
        while(this.lazer_e2.xEnd >= 0 && this.lazer_e2.xEnd <= SCREEN_WIDTH
            && this.lazer_e2.yEnd >= 0 && this.lazer_e2.yEnd <= SCREEN_HEIGHT)
            {
                this.lazer_e2.xEnd = this.lazer_e2.xEnd + Math.cos(this.snake.angel)
                this.lazer_e2.yEnd = this.lazer_e2.yEnd + Math.sin(this.snake.angel)
            }
          
    }

    drawLine(startPos, endPos){
        this.snake.game.ctx.beginPath();
        this.snake.game.ctx.shadowColor = 'blue'
        this.snake.game.ctx.strokeStyle = 'blue'
        this.snake.game.ctx.moveTo(startPos.x , startPos.y)
        this.snake.game.ctx.lineTo(endPos.x, endPos.y)
        this.snake.game.ctx.stroke();
        this.snake.game.ctx.closePath();

        
    }

    draw(){
        this.drawLine(
            {x: this.lazer_e1.xStart, y: this.lazer_e1.yStart},
            {x: this.lazer_e1.xEnd, y: this.lazer_e1.yEnd}
        )
        
        this.drawLine(
            {x: this.lazer_e2.xStart, y: this.lazer_e2.yStart},
            {x: this.lazer_e2.xEnd, y: this.lazer_e2.yEnd}
        )
    }
}