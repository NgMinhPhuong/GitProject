class ScreenStart{
    constructor(){
        this.canvas = document.querySelector('div canvas')
        this.ctx = this.canvas.getContext("2d");
        this.icol = 0;
        this.arrSnake = [{x: 15, y: 50}];
        this.createTail();
        this.draw()
        
       
    }

    createTail(){
        for(let i = 1; i < 39; i++)
        {
            let Obj = {};
            Obj.x = this.arrSnake[i - 1].x + 7;
            Obj.y = this.arrSnake[i - 1].y;
            this.arrSnake.push(Obj);
        }
        
    }

    update(){
        
    }

    draw(){
        
        for(let i = 0; i < 39; i++)
        {
                this.drawCircle(
                    {x: this.arrSnake[i].x, y: this.arrSnake[i].y},
                    'snack'
                )    
        }

        this.drawCircle(
            {x: 290, y: 40},
            'eye'
        )
        this.drawCircle(
            {x: 290, y: 60},
            'eye'
        )
    }

    drawCircle(pos, stylesName){
        
        this.col = ['#F65A5A','green','blue','yellow','pink','gray','white', 'black','purple'];
        let styles = {};
        styles['snack'] = {
            boderColor: 'red',
            color: this.col[this.icol],
            width: 15
        }
        styles['eye'] = {
            boderColor: 'red',
            color: 'black',
            width: 5
        }
        
        let styleProperties = styles[stylesName];
        this.ctx.beginPath();
        this.ctx.arc(
            pos.x ,
            pos.y ,
            styleProperties.width,
            0,
            2*Math.PI,
            //anticlockwise
        )
        this.ctx.fillStyle = styleProperties.color;
        this.ctx.fill();
        this.ctx.strokeStyle = styleProperties.boderColor;
        this.ctx.stroke();
    }
}
