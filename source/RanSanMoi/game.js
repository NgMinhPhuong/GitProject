class game {
    constructor(){
        this.name = document.querySelector('input').value;
        let colorSnake = b.arr
        document.querySelector('div').remove();  
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = SCREEN_WIDTH;
        this.canvas.height = SCREEN_HEIGHT;
        document.body.appendChild(this.canvas);
        this.snake = new snake(this);
        this.food = new food(this)
        this.screen = new screen(this)
        this.bg = new bg(this);
        this.score = new score(this);
        this.loop();
    }

    loop(){
        this.update();
        this.draw();
        this.lop = setTimeout( () => this.loop(), 30)
    }

    update(){
        this.snake.update();
        this.screen.update(); 
        this.score.update();
        this.food.update();
        this.bg.update();
    }

    
    clearScreen(){
        this.ctx.fillStyle = '#f2f2f2';
        this.ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    }

    draw(){
        this.clearScreen();
        this.bg.draw();
        this.screen.drawLimit();
        this.food.draw();
        this.snake.draw(); 
        this.score.draw()
        if(this.snake.x >= GAME_WIDTH || this.snake.x <= 0
            || this.snake.y >= GAME_HEIGHT || this.snake.y <=0)
        {    
            this.screen.drawGameOver();
            
        }
        
        
        
    }
}
let a = document.querySelector('button');
a.onclick = function(e){
    let c = new game();
}




































