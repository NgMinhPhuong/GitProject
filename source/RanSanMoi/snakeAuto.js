class SnakeAuto{
    constructor(game){
        this.game = game;
        this.x = GAME_WIDTH / 2;
        this.y = GAME_HEIGHT / 2;
        this.numOfChain = 30;
        this.numOfChainOld = 30;
        this.angel = 0;
        this.eye = new eye(this);
        this.tailPosition = [];
        this.createTail();
        this.loop();
        
    }

    createTail(){
        for(let i = 0; i < this.numOfChain; i++)
        {
            this.tailPosition.push(
                {
                    x: this.x - (i * SNAKE_SPEED_AUTO),
                    y: this.y
                })
        }
    }

    loop(){
        this.angel = -Math.PI + Math.random() * 2 * Math.PI
        setTimeout(() => this.loop(), (Math.random() * 6000) + 2000)
    }

    processMouseMove(){
          
    }

    update(){
        
        let newTailPosition = {
            x: this.x + Math.cos(this.angel) * SNAKE_SPEED_AUTO,
            y: this.y + Math.sin(this.angel) * SNAKE_SPEED_AUTO
        }
       
        if(this.numOfChain == this.numOfChainOld) 
        this.tailPosition.pop();
        this.numOfChainOld = this.numOfChain;
        this.tailPosition.unshift(newTailPosition);
        this.x = newTailPosition.x;
        this.y = newTailPosition.y; 
        this.eye.update();
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
    }
}