class food{
    constructor(game){
        this.game = game;
        this.arrFood = [];
        this.createFood();
    }

    createFood(){
        for(let i = 0; i < 2500; i++)
        {
            let objFood = {};
            objFood.x = Math.random() * GAME_WIDTH;
            objFood.y = Math.random() * GAME_HEIGHT;
            objFood.angleFood = Math.atan2(
                objFood.y - this.game.snake.y,
                objFood.x - this.game.snake.x
            )
            this.arrFood.push(objFood);
        }
    }

    update(){
        for(let i in this.arrFood){
            this.arrFood[i].angleFood = Math.atan2(
                this.arrFood[i].y - this.game.snake.y,
                this.arrFood[i].x - this.game.snake.x
            )
        } 
        
        for(let i = 0; i < this.arrFood.length; i++)
        {
            if(Math.abs(this.arrFood[i].x - this.game.snake.x) <= 20 
            && Math.abs(this.arrFood[i].y - this.game.snake.y) <= 20)
            {
                this.arrFood.splice(i, 1);
                i--;
                this.game.score.Score += 10;
                this.game.snake.numOfChain += 3;
            }
        }
    }

    draw(){
        for(let i of this.arrFood)
        {
            this.game.screen.drawCircle(
                {x: i.x, y: i.y}, 
        'food');
        }
    }
}