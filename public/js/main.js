import SpriteSheet from "/js/SpriteSheet.js"

function loadImage(url) {
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener("load", () => {
            resolve(image);
        });
        image.src = url;
    });
}

const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

loadImage("/img/tiles.png").then(image => {
    const sprites = new SpriteSheet(image, 16, 16);
    sprites.define("ground", 0, 0);
    sprites.draw("ground", context, 145, 245);
});
