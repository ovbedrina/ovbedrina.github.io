var image = null;

function loadImage() {
    var imgFile = document.getElementById("imageFile");
    image = new SimpleImage(imgFile);
    canvas = document.getElementById("can");
    image.drawTo(canvas);
}

//function applyRedFilter () {}

function checkImageLoaded() {
    if (image == null || !image.complete()) {
        alert("Image is not loaded. Please upload an image to continue.");
        return;
    }
}

function applyGrayscale() {
    checkImageLoaded();
    imageCopy = new SimpleImage(image.getWidth(), image.getHeight());
    for (var pixel of image.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        var newPixel = imageCopy.getPixel(pixel.getX(), pixel.getY());
        newPixel.setRed(avg);
        newPixel.setGreen(avg);
        newPixel.setBlue(avg);
    }
    var canvas = document.getElementById("can");
    imageCopy.drawTo(canvas);
}

function applyRedFilter() {
    checkImageLoaded();
    imageCopy = new SimpleImage(image.getWidth(), image.getHeight());
    for (var pixel of image.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        var newPixel = imageCopy.getPixel(pixel.getX(), pixel.getY());
        if (avg < 128) {
            newPixel.setRed(avg * 2);
            newPixel.setGreen(0);
            newPixel.setBlue(0);
        }
        else {
            newPixel.setRed(255);
            newPixel.setGreen(avg * 2 - 255);
            newPixel.setBlue(avg * 2 - 255);
        }
    }
    var canvas = document.getElementById("can");
    imageCopy.drawTo(canvas);
}


function colorifyPixel(newPixel, pixel, red, green, blue) {
    newPixel.setRed((pixel.getRed() + red) / 2);
    newPixel.setGreen((pixel.getGreen() + green) / 2);
    newPixel.setBlue((pixel.getBlue() + blue) / 2);
}
function applyRainbow() {
    checkImageLoaded();
    imageCopy = new SimpleImage(image.getWidth(), image.getHeight());
    for (var pixel of image.values()) {
        var newPixel = imageCopy.getPixel(pixel.getX(), pixel.getY());
        if (pixel.getX() < imageCopy.getWidth() / 7) {
            colorifyPixel(newPixel, pixel, 255, 0, 0);
        }
        else if (pixel.getX() < 2 * imageCopy.getWidth() / 7) {
            colorifyPixel(newPixel, pixel, 255, 165, 0);
        }
        else if (pixel.getX() < 3 * imageCopy.getWidth() / 7) {
            colorifyPixel(newPixel, pixel, 255, 255, 0);
        }
        else if (pixel.getX() < 4 * imageCopy.getWidth() / 7) {
            colorifyPixel(newPixel, pixel, 0, 255, 0);
        }
        else if (pixel.getX() < 5 * imageCopy.getWidth() / 7) {
            colorifyPixel(newPixel, pixel, 173, 216, 230);
        }
        else if (pixel.getX() < 6 * imageCopy.getWidth() / 7) {
            colorifyPixel(newPixel, pixel, 0, 0, 255);
        }
        else if (pixel.getX() < 7 * imageCopy.getWidth() / 7) {
            colorifyPixel(newPixel, pixel, 85, 26, 139);
        }
            }
    var canvas = document.getElementById("can");
    imageCopy.drawTo(canvas);
}


//function applyRainbow() {}

function resetImage() {
    checkImageLoaded();
    image.drawTo(canvas);
}

