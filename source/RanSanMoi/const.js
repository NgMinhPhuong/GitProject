const GAME_WIDTH = 5000;
const GAME_HEIGHT = 5000; 

const SCREEN_WIDTH = 800//window.innerWidth;
const SCREEN_HEIGHT = 800//window.innerHeight;

let SNAKE_SPEED = 4;
const SNAKE_SPEED_NOR = 4;
const SNAKE_SPEED_AUTO = 4;

const GRID_SIZE = 40;



let b = new ScreenStart();
function checkshotEnemy(Pos, arrSnakeAuto){
    for(let xx in arrSnakeAuto)
    {
        for(let xxx of arrSnakeAuto[xx].tailPosition)
        {
            if(Math.abs(xxx.x - Pos.x) <= 20 && Math.abs(xxx.y - Pos.y <=20))
            {
                //arrSnakeAuto[xx].health.lengthHealthInside -= 1;
                return true;
            }
        }
    }
    return false;
}