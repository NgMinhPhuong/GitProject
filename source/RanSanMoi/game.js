class game {
    constructor(){
        this.name = document.querySelector('input').value;
        document.querySelector('div').remove();  
        this.canvas = document.createElement('canvas');
        //this.img = document.createElement('img');
        //this.img.src = 'https://media4.giphy.com/media/UvQBDoaSOsfdGpJnGF/giphy.gif?cid=ecf05e47bpkkm4je7df6jhjpfi3uivhp1csq302ag5t06j6l&ep=v1_gifs_related&rid=giphy.gif&ct=g'
        //this.img.setAttribute('class','myimg')
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = SCREEN_WIDTH;
        this.canvas.height = SCREEN_HEIGHT;
        //this.img.style.width = this.canvas.width + 'px';
        //this.img.style.height = this.canvas.height + 'px';
        document.body.appendChild(this.canvas);
        //document.body.appendChild(this.img)
        this.snake = new snake(this);
        this.food = new food(this)
        this.screen = new screen(this)
        this.bg = new bg(this);
        this.score = new score(this);
        this.SnakeAuto = [];
        this.Energy = new Energy(this);
        for(let i = 0; i < 10; i++){
            let a = new SnakeAuto(this);
            this.SnakeAuto.push(a);
        }
        this.lop = setInterval(() => {
            this.loop();
        },30)
    }

    loop(){     
        this.update();
        this.draw();      
    }

    update(){
        for(let x of this.SnakeAuto)
        {
            x.update();
        }
        this.snake.update();
        this.screen.update(); 
        
        this.score.update();
        this.food.update();
        this.bg.update();
    }

    
    clearScreen(){
        // this.ctx.fillStyle =  '#f2f2f2';
        // this.ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
        this.ctx.clearRect(0, 0 , this.canvas.width, this.canvas.height)
    }

    draw(){
        this.clearScreen();
        this.bg.draw();
        this.food.draw();
        for(let x of this.SnakeAuto)
        {
            x.draw();
        }
        this.snake.draw(); 
        this.score.draw()
        
        this.Energy.draw();
        if(this.snake.x >= GAME_WIDTH || this.snake.x <= 0
            || this.snake.y >= GAME_HEIGHT || this.snake.y <=0)
        {    
            this.screen.drawGameOver();
            clearInterval(this.lop);
        }        
    }
}
let a = document.querySelector('button');
a.onclick = function(e){
    let c = new game();
}




































