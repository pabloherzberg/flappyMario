function Canos(){
    let largura = width/8
    let alturaCanoCima = Math.random()*height -height/3
    if(alturaCanoCima<height/3){
        alturaCanoCima = height/6
    }
    let alturaCanoBaixo = height - alturaCanoCima - height/5
    let yPosCanoBaixo = alturaCanoCima + height/2
    let sWidth = 136
    let sHeight = 565
    let dWidth = largura
    ctx.fillStyle='white'
    this.sX = 622
    this.sY = 30
    this.xVel = -1
    if(score>8){
        this.sX = 51
        this.sY = 31
        yPosCanoBaixo = alturaCanoCima + height/2.5
    }
    if(score>18){
        this.sX = 240
        this.sY = 29
        yPosCanoBaixo = alturaCanoCima + height/2.725
    }
    if(score>28){
        this.sX = 424
        this.sY = 30
        yPosCanoBaixo = alturaCanoCima + height/3
    }
    this.x = width //usar o this para ser acessível como método
    this.colidiu = (mario)=>{
        if(mario.y<alturaCanoCima || mario.y>yPosCanoBaixo){
            if(mario.x > this.x && mario.x < this.x + largura){
                ctx.fillStyle='red'
                this.xVel = 0
                return true
            }
        }
    }
    this.update =()=>{
        this.x += this.xVel
    }
    this.draw =()=>{
        ctx.save()
        ctx.scale(1,-1)
        ctx.drawImage(pipe,this.sX, this.sY, sWidth, sHeight, this.x, 0, dWidth, alturaCanoCima*-1) //cano de cima
        ctx.restore()
        ctx.drawImage(pipe,this.sX, this.sY, sWidth, sHeight, this.x, yPosCanoBaixo, dWidth, alturaCanoBaixo) //cano de baixo
    }
}
