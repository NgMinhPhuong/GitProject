class snake {
    constructor(game){
        this.game = game;
        this.x = GAME_WIDTH / 2;
        this.y = GAME_HEIGHT / 2;
        this.listenMouseEvent();
        this.angel = 0;
        this.tailPosition = [];
        this.createTail();
        
    }

    listenMouseEvent(){
        this.game.canvas.addEventListener('mousemove', (event) =>{
            let rect = this.game.canvas.getBoundingClientRect();
            this.processMouseMove({
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            })
           
        })
        this.game.canvas.addEventListener('click', (e)=>{
            console.log(this.angel);
        })
        
    }

    processMouseMove(mousePos){
        this.angel = Math.atan2(
            mousePos.y - (SCREEN_HEIGHT / 2),
            mousePos.x - (SCREEN_WIDTH / 2)
        );
        
    }

    createTail(){
        for(let i = 0; i < 100; i++)
        {
            this.tailPosition.push(
                {
                    x: this.x - (i * SNAKE_SPEED),
                    y: this.y
                })
        }
    }

    update(){
        
        let newTailPosition = {
            x: this.x + Math.cos(this.angel) * SNAKE_SPEED,
            y: this.y + Math.sin(this.angel) * SNAKE_SPEED
        }
    
        this.tailPosition.pop();
        this.tailPosition.unshift(newTailPosition);  
        this.x = newTailPosition.x;
        this.y = newTailPosition.y; 
    }

    draw(){
        //draw shadow
        for(let i = this.tailPosition.length - 1; i > 1 ; i--){
            
                this.game.screen.drawCircle(
                    {
                        x: this.tailPosition[i].x,
                        y: this.tailPosition[i].y
                    },
                    'shadow'
                );
            
            
        }
    

        //draw body
        for(let i = this.tailPosition.length - 1; i > 1 ; i--){////////////////
            if(i % 3 == 0){
                this.game.screen.drawCircle(
                    {
                        x: this.tailPosition[i].x,
                        y: this.tailPosition[i].y
                    },
                    'snack'
                );
            } 
        }

        //draw head 

        
    }
}