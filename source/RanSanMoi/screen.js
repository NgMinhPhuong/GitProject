class screen{
    constructor(game){
        this.game = game
        this.top = 0;
        this.bottom = 0;
        this.left = 0;
        this.right = 0;

    }
    update(){ 
        this.top = this.game.snake.y - (SCREEN_HEIGHT / 2);
        this.bottom = this.game.snake.y + (SCREEN_HEIGHT / 2);
        this.left = this.game.snake.x - (SCREEN_WIDTH / 2);
        this.right = this.game.snake.x + (SCREEN_WIDTH / 2);
       
    }

    drawCircle(pos, styleName){
        let styles = {};
        styles['snack'] = {
            boderColor: 'red',
            color: b.col[b.icol],
            width: 20
        }

        styles['shadow'] = {
            boderColor: 'rgba(0, 0, 0, 0.1)',
            color: 'rgba(0, 0, 0, 0.1)',
            width: 25
        }

        styles['eye'] = {
            boderColor: 'red',
            color: 'black',
            width: 5
        }
        
        let col = ['red','green','blue','yellow','pink','gray','white', 'black','purple'];
        if(statusEnergy && this.) styles['snack'].color = col[Math.round(Math.random() * (col.length - 1))];
        let colo = col[Math.round(Math.random() * (col.length - 1))];
        styles['food'] = {
            boderColor: 'black',
            color: colo,
            width: 5
        }

        let styleProperties = styles[styleName];
        this.game.ctx.beginPath();
        this.game.ctx.arc(
            pos.x - this.left,
            pos.y - this.top,
            styleProperties.width,
            0,
            2*Math.PI,
            //anticlockwise
        )
        this.game.ctx.fillStyle = styleProperties.color;
        this.game.ctx.fill();
        this.game.ctx.strokeStyle = styleProperties.boderColor;
        this.game.ctx.stroke();
        this.game.ctx.closePath();
    }

   

    drawScore(SCORE){
        this.game.ctx.beginPath();
        this.game.ctx.font = '50px Arial';
        this.game.ctx.textAlign = 'left';
        this.game.ctx.lineWidth = 5;
        this.game.ctx.strokeText(
        SCORE,
        400,
        40);
    }

    drawName(NAME){
        this.game.ctx.beginPath();
        this.game.ctx.font = '50px Arial';
        this.game.ctx.textAlign = 'left';
        this.game.ctx.lineWidth = 3;
        this.game.ctx.strokeText(
        NAME,
        0,
        40);
    }

    drawGameOver(){
        this.game.ctx.beginPath();
        this.game.ctx.font = '100px Arial';
        this.game.ctx.textAlign = 'center';
        this.game.ctx.lineWidth = 3;
        this.game.ctx.strokeStyle = 'blue'
        this.game.ctx.strokeText(
            `HẾT CỨU !`,
            SCREEN_WIDTH - 50*SCREEN_WIDTH/100,
            SCREEN_HEIGHT - 50*SCREEN_HEIGHT/100);
    }

    drawWin(){
        this.game.ctx.beginPath();
        this.game.ctx.font = '100px Arial';
        this.game.ctx.textAlign = 'center';
        this.game.ctx.lineWidth = 3;
        this.game.ctx.strokeStyle = 'blue'
        this.game.ctx.strokeText(
            `YOU ARE THE BEST`,
            SCREEN_WIDTH - 50*SCREEN_WIDTH/100,
            SCREEN_HEIGHT - 50*SCREEN_HEIGHT/100);
    } 
    
}