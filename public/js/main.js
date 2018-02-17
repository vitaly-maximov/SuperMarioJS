import SpriteSheet from "/js/SpriteSheet.js"
import {loadImage, loadLevel} from "/js/loaders.js"

const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

function drawBackground(background, context, sprites) {
    background.ranges.forEach(([x0, x1, y0, y1]) => {
        for (let x = x0; x < x1; ++x) {
            for (let y = y0; y < y1; ++y) {
                sprites.drawTile(background.tile, context, x, y);
            }
        }
    });
}

loadImage("/img/tiles.png").then(image => {
    const sprites = new SpriteSheet(image, 16, 16);
    sprites.define("ground", 0, 0);
    sprites.define("sky", 3, 23);
    
    loadLevel("1-1").then(level => {
        level.backgrounds.forEach(background => drawBackground(background, context, sprites));
    });

});
