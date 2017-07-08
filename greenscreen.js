var fgImage = null;
var bgImage = null;
var fgCanvas;
var bgCanvas;

function loadForegroundImage() {
    var imgFile = document.getElementById("fgfile");
    fgImage = new SimpleImage(imgFile);
    fgCanvas = document.getElementById("fgcan");
    fgImage.drawTo(fgCanvas);
}

function loadBackgroundImage() {
    var imgFile1 = document.getElementById("bgfile");
    bgImage = new SimpleImage(imgFile1);
    bgCanvas = document.getElementById("bgcan");
    bgImage.drawTo(bgCanvas);
}

function dogreenScreen() {
    if (fgImage == null || !fgImage.complete()) {
        alert("foreground not loaded");
        return;
    }
    if (bgImage == null || !bgImage.complete()) {
        alert("background not loaded");
    }
    clearCanvas();
    var finalImage = createComposite();
    finalImage.drawTo(fgCanvas);
}


function createComposite() {
    var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());
    var greenThreshold = 240;
    for (var pixel of fgImage.values()) {
        var x = pixel.getX();
        var y = pixel.getY();
        if (pixel.getGreen() > greenThreshold) {
            var bgPixel = bgImage.getPixel(x, y);
            output.setPixel(x, y, bgPixel);
        } else {
            output.setPixel(x, y, pixel);
        }
    }
    return output;
}

function clearCanvas() {
    doClear(fgCanvas);
    doClear(bgCanvas);
}

function doClear(canvas) {
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
}
