
const canvas = document.getElementById('starryBackground');
const context = canvas.getContext('2d');

// Resize canvas to always fill the screen
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.onload = function () {
    resizeCanvas();
    aStarryBackground();
}

window.onresize = function () {
    resizeCanvas();
    aStarryBackground();
}

//window.addEventListener('resize', resizeCanvas);

function aStarryBackground (){
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#14142b';
    context.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2;

        context.beginPath();
        context.arc(x, y, size, 0, Math.PI * 2);
        context.fillStyle = '#ebe9e4';
        context.fill();
    }
}
