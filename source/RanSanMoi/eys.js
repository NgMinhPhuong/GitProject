const EYE_DISTANCE = 20 ;
const EYE_ANGLE = 0.8;
class eye{
    constructor(snake){
        this.snake = snake;
        this.e1 = {};
        this.e2 = {};
    }

    update(){
        this.e1 = {
            x: this.snake.x + (Math.cos(this.snake.angel + EYE_ANGLE) * EYE_DISTANCE),
            y: this.snake.y + Math.sin(this.snake.angel + EYE_ANGLE) * EYE_DISTANCE
        }  
        this.e2 = {
            x: this.snake.x + Math.cos(this.snake.angel - EYE_ANGLE) * EYE_DISTANCE,
            y: this.snake.y + Math.sin(this.snake.angel - EYE_ANGLE) * EYE_DISTANCE
        }
    }

    draw(){
        
       
        this.snake.game.screen.drawCircle(this.e1, 'eye');

       
        this.snake.game.screen.drawCircle(this.e2, 'eye')
    }
    
}