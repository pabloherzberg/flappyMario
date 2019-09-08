function Mario(){
    let size = width/8
    this.x = width/8
    this.y = height/2
    let yVel = 0
    let gravity = .2
    let upForce = -8
    let sX 
    let sY 
    let sW 
    let sH 
    this.voar = ()=>{
        yVel += upForce
        sX = 173
        sY = 291
        sW = 27
        sH = 26
    }
    this.update = ()=>{
        if(yVel>=0){
            sX = 213
            sY = 292
            sW = 27
            sH = 26
        }
        if(this.y>=height-height/10){   //bater chão
            gravity = 0
            yVel = 0
            this.y = height-height/10
            return 'chao'            
        }
        if(this.y<0){        //bater no teto
            gravity = 0
            yVel = 0
            this.y = height-height/10
        }
        yVel += gravity
        this.y += yVel
    }
    this.morrer = ()=>{
        this.y +=1
        sX = 301
        sY = 173
        sW = 16
        sH = 24
        if(this.y>=height-height/10){   //bater chão
            gravity = 0
            yVel = 0
            this.y = height-height/10        
        }
        ctx.drawImage(img, sX, sY, sW, sH, this.x, this.y, size*0.66, size) 
    }
  
    this.draw = ()=>{
        ctx.save()
        ctx.drawImage(img, sX, sY, sW, sH, this.x, this.y, size, size)
        ctx.restore()
    }
  
}
