let checkLimitSpeedUp = 28;
class snake {
    constructor(game){
        this.game = game;
        this.x = GAME_WIDTH / 2;
        this.y = GAME_HEIGHT / 2;
        this.numOfChain = 28;
        this.numOfChainOld = 28;
        this.listenMouseEvent();
        this.angel = 0;
        this.eye = new eye(this);
        this.tailPosition = [];
        this.lazer = new Lazer(this);
        this.createTail();
        this.health = new Health(this)
        
    }

    listenMouseEvent(){
        this.game.canvas.addEventListener('mousemove', (event) =>{
            let rect = this.game.canvas.getBoundingClientRect();
            this.processMouseMove({
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            })
        })
        this.game.canvas.onmousedown = function(e){
            if(checkLimitSpeedUp > 28)
            SNAKE_SPEED *= 1.5;
        
            
        
        } 
        this.game.canvas.onmouseup = function(e){
            if(SNAKE_SPEED == SNAKE_SPEED_NOR * 1.5)
            SNAKE_SPEED /= 1.5;
        }
    }

    processMouseMove(mousePos){
            this.angel = Math.atan2(
            mousePos.y - (SCREEN_HEIGHT / 2),
            mousePos.x - (SCREEN_WIDTH / 2)
        );
    }


    createTail(){
        for(let i = 0; i < this.numOfChain; i++)
        {
            this.tailPosition.push(
                {
                    x: this.x - (i * SNAKE_SPEED),
                    y: this.y
                })
        }
    }


    update(){
        this.health.update();
        let newTailPosition = {
            x: this.x + Math.cos(this.angel) * SNAKE_SPEED,
            y: this.y + Math.sin(this.angel) * SNAKE_SPEED
        }
        
        if(this.numOfChain == this.numOfChainOld) 
        this.tailPosition.pop();
        this.numOfChainOld = this.numOfChain;
        this.tailPosition.unshift(newTailPosition);
        this.x = newTailPosition.x;
        this.y = newTailPosition.y; 
        if(SNAKE_SPEED > SNAKE_SPEED_NOR)
        {
            console.log('zo');
            if(this.game.score.Score > 0)
            {
                if(this.tailPosition.length > 28)
                this.tailPosition.pop(); 
                if(checkLimitSpeedUp > 28)
                checkLimitSpeedUp -= 1; //this.numOfChain -= 3;
                this.game.score.Score -= 1;
                console.log(checkLimitSpeedUp);
            }    
        }
        this.eye.update();
        this.lazer.update();
    }

    draw(){
        
        //draw shadow
        for(let i = this.tailPosition.length - 1; i > 0 ; i--){
            
                this.game.screen.drawCircle(
                    {
                        x: this.tailPosition[i].x,
                        y: this.tailPosition[i].y
                    },
                    'shadow'
                );
        }
    
        //draw body
        for(let i = this.tailPosition.length - 1; i > 0 ; i--){////////////////
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
        
        this.eye.draw();
        this.lazer.draw();
       //draw health
       this.health.drawInside();
       this.health.drawOutSide();
       

    }
}