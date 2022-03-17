const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 20

let isDrawing = false
let hue = Math.random() * (360)
let last = {
    'x': 0,
    'y': 0
}

function draw(e) {
    if(!isDrawing) return
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.beginPath()
    ctx.moveTo(last.x, last.y)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()

    last.x = e.offsetX
    last.y = e.offsetY
    hue++
    if (hue >= 360) hue = 0
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true
    last.x = e.offsetX
    last.y = e.offsetY
})
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)