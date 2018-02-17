import {loadLevel} from "/js/loaders.js"
import {loadSprites, loadMarioSprites} from "/js/sprites.js"

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

Promise
    .all([
        loadSprites(), 
        loadMarioSprites(), 
        loadLevel("1-1")])
    .then(([sprites, mario, level]) => {
        level.backgrounds.forEach(background => drawBackground(background, context, sprites));
        mario.draw("idle", context, 50, 50);
    });