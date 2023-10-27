class Lazer{
    constructor(snake){
        this.snake = snake;
        this.lazer_e1 = {};
        this.lazer_e2 = {};
    }

    update(){
        this.lazer_e1.xStart = this.snake.eye.e1.x; this.lazer_e1.xEnd = this.snake.eye.e1.x;
        this.lazer_e1.yStart = this.snake.eye.e1.y; this.lazer_e1.yEnd = this.snake.eye.e1.y;
        this.lazer_e2.xStart = this.snake.eye.e2.x; this.lazer_e2.xEnd = this.snake.eye.e2.x;
        this.lazer_e2.yStart = this.snake.eye.e2.y; this.lazer_e2.yEnd = this.snake.eye.e2.y;
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
            console.log(this.lazer_e1);
    }

    drawLine(startPos, endPos){
        this.snake.game.ctx.lineWidth = 4;
        this.snake.game.ctx.strokeStyle = 'red';
        this.snake.game.ctx.moveTo(startPos.x, startPos.y)
        this.snake.game.ctx.lineTo(endPos.x, endPos.y)
        this.snake.game.ctx.stroke();
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