//recarrega página index.html ao redimencionar
window.onresize = ()=> window.location.href='index.html'

let width = window.innerWidth
let height = window.innerHeight

const canvas = document.querySelector('canvas')
canvas.width = width
canvas.height = height

const ctx = canvas.getContext('2d')
const img = new Image()
const pipe = new Image()
img.src = './sprites.png'
pipe.src = './pipes.png'

