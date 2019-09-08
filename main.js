let mario = new Mario()
let arrayCanos = []
arrayCanos.push(new Canos())
//criar cena
function criarCena(){
    ctx.clearRect(0,0,width,height)
    mario.update()
    mario.draw()
    arrayCanos.forEach(canos =>{
        canos.update()
        canos.draw()
        //testa se houve colisão
        if(canos.colidiu(mario)){
            arrayCanos.forEach(cano => cano.xVel =0)
            window.removeEventListener('click', teclaPressionada)
            mario.morrer()
        }
        //remove do array o primeiro cano criado para liberar memória
        if(canos.x == width/2){
            arrayCanos.push(new Canos())
            if(arrayCanos.length>3){
                arrayCanos.shift()
            }
        }
    })   
    let loop = requestAnimationFrame(criarCena)
    //parar
    if(mario.update() == 'chao'){
        cancelAnimationFrame(loop)
        ctx.clearRect(0,0,width,height)
        ctx.drawImage(img, 217, 249, 27, 28, width/8, height - height/10, width/8, width/8)
    }
}
//criarCena()
img.onload = ()=>{
    criarCena()
}
//função de caputa de toque
function teclaPressionada(){
    mario.voar()
}
window.addEventListener('click', teclaPressionada)

