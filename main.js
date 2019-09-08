let mario = new Mario()
let arrayCanos = []
arrayCanos.push(new Canos())
//criar cena
function criarCena(){
    const botaoStart = document.querySelector('button')
    botaoStart.style.display='none'
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
        //insere um novo cano e remove o último do array para liberar memória
        if(canos.x == width/2.5){
            arrayCanos.push(new Canos())
            if(arrayCanos.length>3){
                arrayCanos.shift()
            }
        }
        if(canos.x == mario.x){
            score++
        }
    }) 
    let loop = requestAnimationFrame(criarCena)
    //parar
    if(mario.update() == 'chao'){
        cancelAnimationFrame(loop)
        ctx.clearRect(0,0,width,height)
        ctx.drawImage(img, 217, 249, 27, 28, width/8, height - height/10, width/8, width/8)
        localStorage.setItem('ranking', score)
        window.location.href='index.html'
    }
    ctx.font='20px Arial'
    if(localStorage.getItem('ranking')!=null){
        let ranking = localStorage.getItem('ranking')
        ctx.fillText(`Última pontuação: ${ranking}`,width/4, 30)
    }
    ctx.fillText(score,width/2,60)
}
//função de caputa de toque
function teclaPressionada(){
    mario.voar()
}
ctx.fillStyle='black'
ctx.font = '50px Arial'
ctx.fillText('FlappyMario',width/12,100)
ctx.font = '20px Arial'
ctx.fillText('por Pablo Herzberg',width/12,150)
ctx.drawImage(img, 217, 249, 27, 28, width/2 -width/8, height - height/6, width/4, width/4)
window.addEventListener('click', teclaPressionada)
window.addEventListener('keypress', teclaPressionada)
