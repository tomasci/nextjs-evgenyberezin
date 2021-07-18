export function generateNoise() {
    // original noise script here: https://code.tutsplus.com/tutorials/how-to-generate-noise-with-canvas--net-16556
    // random float number between A & B here: https://stackoverflow.com/questions/17726753/get-a-random-number-between-0-0200-and-0-120-float-numbers

    if (!!!document.createElement('canvas').getContext) {
        return false
    }

    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')

    canvas.width = 512
    canvas.height = 512

    for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {
            let opacity = (Math.random() * (0.255 - 0.025) + 0.025).toFixed(4) // getting number between 0.01 & 0.075 (0025 - 0195)
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`

            let rand = Math.random()
            if (rand >= 0.9) { // 097
                ctx.fillRect(x, y, 1, 1)
            }
        }
    }

    document.querySelector('div.noise').style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";
}