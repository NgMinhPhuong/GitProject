const SPEED = 10;       

class GameBoard{
    constructor(width, height){
        this.width = width;
        this.height = height;
        let a = document.querySelector('.board')
        a.style.width = this.width+'px';
        a.style.height = this.height+'px';
    }
}

class Ball{
    constructor(x, y, size, speedMove){
        this.x = x;
        this.y = y;
        this.speedMove = speedMove;
        this.size = size;
        this.xcu = x;
        this.ycu = y;
        this.thechua = document.createElement('div')
        let a = document.querySelector('.board')
        this.thechua.classList.add('ball');
        this.thechua.style.left = this.x + 'px';
        this.thechua.style.top = this.y + 'px'
        this.thechua.style.width = this.size + 'px';
        this.thechua.style.height = this.size + 'px';
        a.append(this.thechua);
        this.direction = 1;
    }

    wayMove(){
        if(this.direction == 1)
    {
        if(this.y <= 0) this.direction = 2;
        else if(this.x >= game.width - this.size) this.direction = 4;
        else {
            this.x += this.speedMove;
            this.y -= this.speedMove;
            this.moveBall();
           
        }
    }
    else if(this.direction == 2)
    {
        if(this.x >= game.width - this.size) this.direction = 3;
        else if(this.y >= bar.top - this.size) this.direction = 1;
        else {
            this.x += this.speedMove;
            this.y += this.speedMove;
            this.moveBall();
            
        }
    }
    else if(this.direction == 3)
    {
        if(this.y >= bar.top - this.size) this.direction = 4;
        else if(this.x <= 0) this.direction = 2;
        else {
            this.x -= this.speedMove;
            this.y += this.speedMove;
            this.moveBall();
            
        }
    }
    else if(this.direction == 4)
    {
        if(this.x <= 0) this.direction = 1;
        else if(this.y <= 0) this.direction = 3;
        else {
            this.x -= this.speedMove;
            this.y -= this.speedMove;
            this.moveBall();
           
        }
    }
    }

    moveBall(){
        
        this.thechua.style.left = this.x + 'px';
        this.thechua.style.top = this.y  + 'px';
    }
}

class Bar{
    constructor(width, height, x, speed, top){
        this.width = width;
        this.x = x;
        this.speed = speed;
        this.height = height;
        this.top = top;
        let a = document.querySelector('.bar')
        a.style.width = this.width + 'px';
        a.style.left = this.x + 'px';
        a.style.height = this.height + 'px'
        a.style.top = this.top + 'px'
        
    }

    moveLeft(){
        if(this.x <= 0) return;
        let a = document.querySelector('.bar')                  
        this.x -= this.speed;                                 
        a.style.left = this.x + 'px';
    }

    moveRight(){
        if(this.x >= (game.width - this.width)) return;
        let a = document.querySelector('.bar')
        this.x += this.speed
        a.style.left = this.x + 'px'
        console.log(this.x, this.width);
    }
}
    
let game = new GameBoard(400, 400);
let bar = new Bar(80, 12, 0, 10, 320)
let ball = [];
for(let i = 0; i < 100; i++)
{
    let x = Math.random()*(game.width - SPEED);
    let y = Math.random()*(bar.top - SPEED);
    ball[i] = new Ball(x, y, SPEED, 1);
}

window.onkeydown = function(e){
   
    switch (e.which) {
        case 37:
            bar.moveLeft();
            break; 
        case 39:
            bar.moveRight();
            break;
    }
}


let MoveBall = setInterval(function()
{ 
    for(let i = 0; i < 100; i++)
    {
        ball[i].wayMove() 
    }    
},0)



