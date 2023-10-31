let levelEnergy1 = 0, statusEnergy = false;
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
            
            if((e.key == "s" || e.key == 'S') && levelEnergy1 == 100)
            {   // chuyển backgound
                let im = document.querySelector('img');
                setTimeout( () => {
                    im.src = `https://media3.giphy.com/media/FZzbTJyRTwPuw/giphy.gif?cid=ecf05e47sfr98gs2wq67exdhys0fey0vfsxdp0wcqyzr2tur&ep=v1_gifs_search&rid=giphy.gif&ct=g`
                    im.style.animation = `test1 1s linear forwards`
                },1050)
                im.style.animation = `test 1s linear forwards`
                //     
                statusEnergy = true;
               
                setTimeout( () => {
                    statusEnergy = false;
                },10000)
                let interv = setInterval(() => {
                    levelEnergy1--;
                    if(levelEnergy1 == 0)
                    {//
                        let im = document.querySelector('img');
                        setTimeout( () => {
                            im.src = `https://media4.giphy.com/media/UvQBDoaSOsfdGpJnGF/giphy.gif?cid=ecf05e47bpkkm4je7df6jhjpfi3uivhp1csq302ag5t06j6l&ep=v1_gifs_related&rid=giphy.gif&ct=g`
                            im.style.animation = `test1 1s linear forwards`
                        },1050)
                        im.style.animation = `test 1s linear forwards`
                     //
                        clearInterval(interv);
                    }
                }, 100);

            }
        }
    }

    draw(){
        this.game.ctx.beginPath();
        this.game.ctx.strokeStyle = 'gray';
        this.game.ctx.lineWidth = 5;
        this.game.ctx.strokeRect(SCREEN_WIDTH - 180, 20, 180, 30)
        //--------------------------
        
        if(levelEnergy1 > 100) levelEnergy1 = 100;
        if(levelEnergy1 == 100)
        {
            this.game.ctx.fillStyle = this.arrColorEnergy[
                Math.round(Math.random() * 4)
            ]
        }
        else{
            this.game.ctx.fillStyle = 'purple';
        }
        this.game.ctx.fillRect(SCREEN_WIDTH - 180 + 5, 25, 170 * levelEnergy1 / 100, 20);
        
    }
}