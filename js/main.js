var canvasBody = document.getElementById('canvas'),
    canvas = canvasBody.getContext('2d'),
    w = canvasBody.width = window.innerWidth,
    h = canvasBody.height = window.innerHeight,
    opts = {
        spawnOpacity: 1,
        size: 30,
        sizeRandom: 10, 
        color: 'rgba(39, 173, 96, alpha)'
    }; 


function anim() {
    window.requestAnimationFrame(anim);

    step();
}
anim();

function step () {
    var fillColor = opts.color.replace('alpha', opts.spawnOpacity);
    canvas.fillStyle = fillColor;
    var random = Math.random() * opts.sizeRandom;
    canvas.fillRect(-(opts.size/2) + Math.random() * w,-(opts.size/2) + Math.random() * h, opts.size + random, opts.size);
    canvas.fillStyle = 'rgba(255, 255, 255, 0.1)';
    canvas.fillRect(0, 0, w, h);
}