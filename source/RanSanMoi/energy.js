
class Energy{
    constructor(game){
        this.game = game;
        this.arrColorEnergy = ['white','red', 'green', 'blue', 'black'];
        this.listenEvent();
    }

    update(){

    }

    listenEvent(){
        window.onkeyup = function(e){
            console.log(statusEnergy);
            if(e.key == "s" && levelEnergy1 == 100)
            {
                let im = document.querySelector('img');
                setTimeout( () => {
                    im.src = `https://media3.giphy.com/media/FZzbTJyRTwPuw/giphy.gif?cid=ecf05e47sfr98gs2wq67exdhys0fey0vfsxdp0wcqyzr2tur&ep=v1_gifs_search&rid=giphy.gif&ct=g`
                    im.style.animation = `test1 1s linear forwards`
                },1050)
                im.style.animation = `test 1s linear forwards`     
                statusEnergy = true;
               
                setTimeout( () => {
                    statusEnergy = false;
                },10000)
                let interv = setInterval(() => {
                    levelEnergy1--;
                    if(levelEnergy1 == 0)
                    {
                        let im = document.querySelector('img');
                        setTimeout( () => {
                            im.src = `https://kenh14cdn.com/LJ9BRCA2SwO2i2yoqIMzIMq9QI2QMI/Image/2015/05/cd1-358c5.gif`
                            im.style.animation = `test1 1s linear forwards`
                        },1050)
                        im.style.animation = `test 1s linear forwards`
                        clearInterval(interv);
                    }
                }, 100);
            }
        }
    }

    draw(){
        
        
             
        
        this.game.ctx.strokeStyle = 'gray';
        this.game.ctx.lineWidth = 5;
        this.game.ctx.strokeRect(620, 0, 180, 30)
        //--------------------------
        
        if(levelEnergy1 > 100) levelEnergy1 = 100;
        if(levelEnergy1 == 100)
        {
            this.game.ctx.fillStyle = this.arrColorEnergy[
                Math.round(Math.random() * 4)
            ]
        }
        else{
            this.game.ctx.fillStyle = 'red';
        }
        this.game.ctx.fillRect(625, 5, 170 * levelEnergy1 / 100, 20);

    }
}