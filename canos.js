function Canos(){
    let largura = width/8
    let alturaCanoCima = Math.random()*height -height/3
    if(alturaCanoCima<height/3){
        alturaCanoCima = height/6
    }
    let alturaCanoBaixo = height - alturaCanoCima - height/5
    let yPosCanoBaixo = alturaCanoCima + height/3
    let sX = 622
    let sY = 30
    let sWidth = 136
    let sHeight = 565
    let dWidth = largura
    this.xVel = -1
    ctx.fillStyle='white'
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
        ctx.drawImage(pipe,sX, sY, sWidth, sHeight, this.x, 0, dWidth, alturaCanoCima*-1) //cano de cima
        ctx.restore()
        ctx.drawImage(pipe,sX, sY, sWidth, sHeight, this.x, yPosCanoBaixo, dWidth, alturaCanoBaixo) //cano de baixo
    }
}