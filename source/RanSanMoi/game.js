class game {
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = SCREEN_WIDTH;
        this.canvas.height = SCREEN_HEIGHT;
        document.body.appendChild(this.canvas);
        this.snake = new snake(this);
        this.screen = new screen(this)
        this.bg = new bg(this);
        this.eye = new eye(this.snake);
        this.loop();
    }

    loop(){
        this.update();
        this.draw();
        setTimeout( () => this.loop(), 30)
    }

    update(){
       this.snake.update();
       this.eye.update();
       this.screen.update(); 
       this.bg.update();
    }


    clearScreen(){
        this.ctx.fillStyle = '#f2f2f2';
        this.ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    }

    draw(){
        this.clearScreen();
        this.bg.draw();
        this.snake.draw(); 
        this.eye.draw();
        
        
    }
}

let c = new game();


































// class Snake{
//     constructor(top, left, size, color, speed){
//         this.top = top;
//         this.left = left;
//         this.size = size;
//         this.color = color;
//         this.arr = [];
//         this.speed = speed
//         for(let i = 0; i < this.size; i++)
//         {
//             let a = document.createElement('div');
//             a.style.width = this.size + 'px';
//             a.style.height = this.size + 'px';
//             a.style.backgroundColor = this.color;
//             a.style.position = 'absolute';
//             a.style.left = (this.left + (i * this.size)) + 'px';
//             a.style.top = this.top + 'px';
//             this.arr[i] = a;
//             document.querySelector('.box').append(a);
//         }
        
//     }

//     SnakeMove(toX, toY){
//         for(let i = 0; i < this.arr.length - 1; i++)
//         {
//             this.arr[i].style.top = this.arr[i+1].style.top;
//             this.arr[i].style.left = this.arr[i+1].style.left;
//         }
//         this.arr[this.arr.length-1].style.top = toY + 'px';
//         this.arr[this.arr.length-1].style.left = toX + 'px';
//     }
    
// }


// let nake = new Snake(50, 50, 50, 'red', 20);
// window.onmousemove = function(e){
//     e.clientX += this.size;
//     e.clientY += this.size;
//    nake.SnakeMove(e.clientX + nake.speed + nake.size, e.clientY + nake.speed + nake.size)
// }
