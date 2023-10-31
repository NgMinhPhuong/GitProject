const ONE_DISTANCE = 30;
const TWO_DISTANCE = 32
const THREE_DISTANCE = 48
const FOUR_DISTANCE = 50
const LENGTH_HEALTH = 100

class Health {
    constructor(snake){
        this.snake = snake;
        this.lengthHealthInside = 100;
    }
    
    update(){
        this.oneAngel = {
            Start: this.snake.angel - Math.PI/2,
            End: this.snake.angel - Math.PI/2 - Math.atan2(
                LENGTH_HEALTH, ONE_DISTANCE)
            
        }

        this.twoAngel = {
            Start: this.snake.angel - Math.PI/2,
            End: this.snake.angel - Math.PI/2 - Math.atan2(
                this.lengthHealthInside, TWO_DISTANCE
            )
        }
        
        this.threeAngel = {
            Start: this.snake.angel - Math.PI/2,
            End: this.snake.angel - Math.PI/2 - Math.atan2(
                this.lengthHealthInside, THREE_DISTANCE
            )
        }
        
        this.fourAngel = {
            Start: this.snake.angel - Math.PI/2,
            End: this.snake.angel - Math.PI/2 - Math.atan2(
                LENGTH_HEALTH, FOUR_DISTANCE)
            
        }
    
        //------------coordinates
        this.oneCoordinates = {
            Start: {x: (this.snake.x - this.snake.game.screen.left) + Math.cos(this.oneAngel.Start) * ONE_DISTANCE,
                    y: (this.snake.y - this.snake.game.screen.top) + Math.sin(this.oneAngel.Start) * ONE_DISTANCE
                    },
            End: {x: (this.snake.x - this.snake.game.screen.left) + Math.cos(this.oneAngel.End) * 
                    Math.sqrt(ONE_DISTANCE*ONE_DISTANCE + LENGTH_HEALTH*LENGTH_HEALTH),
                    y: (this.snake.y - this.snake.game.screen.top) + Math.sin(this.oneAngel.End) *
                    Math.sqrt(ONE_DISTANCE*ONE_DISTANCE + LENGTH_HEALTH*LENGTH_HEALTH) 
                    }
        }
            
        this.twoCoordinates = {
            Start: {x: (this.snake.x - this.snake.game.screen.left) + Math.cos(this.twoAngel.Start) * TWO_DISTANCE,
                    y: (this.snake.y - this.snake.game.screen.top) + Math.sin(this.twoAngel.Start) * TWO_DISTANCE
            },
            End: {x: (this.snake.x - this.snake.game.screen.left) + Math.cos(this.twoAngel.End) *
                    Math.sqrt(TWO_DISTANCE*TWO_DISTANCE + this.lengthHealthInside*this.lengthHealthInside),
                    y: (this.snake.y - this.snake.game.screen.top) + Math.sin(this.twoAngel.End) *
                    Math.sqrt(TWO_DISTANCE*TWO_DISTANCE + this.lengthHealthInside*this.lengthHealthInside)
            }
        }
       
        this.threeCoordinates = {
            Start: {x: (this.snake.x - this.snake.game.screen.left) + Math.cos(this.threeAngel.Start) * THREE_DISTANCE,
                y: (this.snake.y - this.snake.game.screen.top) + Math.sin(this.threeAngel.Start) * THREE_DISTANCE
            },
            End: {x: (this.snake.x - this.snake.game.screen.left) + Math.cos(this.threeAngel.End) *
                Math.sqrt(THREE_DISTANCE*THREE_DISTANCE + this.lengthHealthInside*this.lengthHealthInside),
                y: (this.snake.y - this.snake.game.screen.top) + Math.sin(this.threeAngel.End) *
                Math.sqrt(THREE_DISTANCE*THREE_DISTANCE + this.lengthHealthInside*this.lengthHealthInside)

            }
        }

        this.fourCoordinates = {
            Start: {x: (this.snake.x - this.snake.game.screen.left) + Math.cos(this.fourAngel.Start) * FOUR_DISTANCE,
                    y: (this.snake.y - this.snake.game.screen.top) + Math.sin(this.fourAngel.Start) * FOUR_DISTANCE 
                    },
            End: {x: (this.snake.x - this.snake.game.screen.left) + Math.cos(this.fourAngel.End) * 
                Math.sqrt(FOUR_DISTANCE*FOUR_DISTANCE + LENGTH_HEALTH*LENGTH_HEALTH), 
                    y: (this.snake.y - this.snake.game.screen.top) + Math.sin(this.fourAngel.End) *
                    Math.sqrt(FOUR_DISTANCE*FOUR_DISTANCE + LENGTH_HEALTH*LENGTH_HEALTH)
                }
        }
    }
        
    drawOutSide(){
        this.snake.game.ctx.beginPath();
        this.snake.game.ctx.lineWidth = 3;
        this.snake.game.ctx.strokeStyle = 'gray';
        this.snake.game.ctx.moveTo(this.oneCoordinates.Start.x, this.oneCoordinates.Start.y)
        this.snake.game.ctx.lineTo(this.oneCoordinates.End.x, this.oneCoordinates.End.y)
        this.snake.game.ctx.lineTo(this.fourCoordinates.End.x, this.fourCoordinates.End.y)
        this.snake.game.ctx.lineTo(this.fourCoordinates.Start.x, this.fourCoordinates.Start.y)
        this.snake.game.ctx.lineTo(this.oneCoordinates.Start.x, this.oneCoordinates.Start.y)
        this.snake.game.ctx.stroke();
    }

    drawInside(){
        this.snake.game.ctx.beginPath();
        this.snake.game.ctx.lineWidth = 4;
        this.snake.game.ctx.strokeStyle = 'white';
        this.snake.game.ctx.moveTo(this.twoCoordinates.Start.x, this.twoCoordinates.Start.y)
        this.snake.game.ctx.lineTo(this.twoCoordinates.End.x, this.twoCoordinates.End.y)
        this.snake.game.ctx.lineTo(this.threeCoordinates.End.x, this.threeCoordinates.End.y)
        this.snake.game.ctx.lineTo(this.threeCoordinates.Start.x, this.threeCoordinates.Start.y)
        this.snake.game.ctx.lineTo(this.twoCoordinates.Start.x, this.twoCoordinates.Start.y)
        this.snake.game.ctx.fillStyle = 'red'
        this.snake.game.ctx.fill();
        this.snake.game.ctx.stroke();
    }

    draw(){
        this.drawInside();
        this.drawOutSide();
    }
}