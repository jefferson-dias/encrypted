const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = document.body.offsetWidth;
const height = canvas.height = document.body.offsetHeight;
const cols = Math.floor(width / 20) + 1;
const rows = Array(cols).fill(0);

ctx.fillStyle = '#02032e';
ctx.fillRect(0, 0, width, height);

function drawMatrix() {
    ctx.fillStyle = '#0001';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#26a6e8';
    ctx.font = '15pt monospace';



    rows.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 20;
        ctx.fillText(text, x, y);

        if (y > 100 + Math.random() * 10000) rows[ind] = 0;
        else rows[ind] = y + 20;
    });

}
setInterval(drawMatrix, 150);