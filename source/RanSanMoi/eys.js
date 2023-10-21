const EYE_DISTANCE = 10 ;
const EYE_ANGLE = 0.5;
class eye{
    constructor(snake){
        this.snake = snake;
        this.eye1 = {};
        this.eye2 = {};
    }

    update(){
        this.eye1.x = this.snake.x + Math.cos(EYE_ANGLE) * EYE_DISTANCE;
        this.eye1.y = this.snake.y + Math.sin(EYE_ANGLE) * EYE_DISTANCE;
        this.eye2.x = this.snake.x + Math.sin(EYE_ANGLE - Math.PI/2) * EYE_DISTANCE;
        this.eye2.y = this.snake.y + Math.cos(EYE_ANGLE - Math.PI/2) * EYE_DISTANCE;
    }

    draw(){
        this.snake.game.screen.drawCircle(this.eye1, 'eye');
        this.snake.game.screen.drawCircle(this.eye2, 'eye');

    }
    
}