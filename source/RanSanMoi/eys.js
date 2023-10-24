const EYE_DISTANCE = 10 ;
const EYE_ANGLE = 1.3;
class eye{
    constructor(snake){
        this.snake = snake;
        this.e1 = {};
        this.e2 = {};
    }

    update(){
        
    }

    draw(){
       
        this.e1 = {
            x: this.snake.x + (Math.cos(this.snake.angel + EYE_ANGLE) * EYE_DISTANCE),
            y: this.snake.y + Math.sin(this.snake.angel + EYE_ANGLE) * EYE_DISTANCE
        }
       
        this.snake.game.screen.drawCircle(this.e1, 'eye');

        this.e2 = {
            x: this.snake.x + Math.cos(this.snake.angel - EYE_ANGLE) * EYE_DISTANCE,
            y: this.snake.y + Math.sin(this.snake.angel - EYE_ANGLE) * EYE_DISTANCE
        }
       this.snake.game.screen.drawCircle(this.e2, 'eye')
    }
    
}