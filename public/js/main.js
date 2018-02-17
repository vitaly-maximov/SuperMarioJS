import {loadLevel} from "/js/loaders.js"
import {loadSprites, loadMarioSprites} from "/js/sprites.js"
import Compositor from "/js/Compositor.js"
import {createBackgroundLayer, createMarioLayer} from "/js/layers.js"

const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

Promise
    .all([
        loadSprites(), 
        loadMarioSprites(), 
        loadLevel("1-1")])
    .then(([sprites, mario, level]) => {

        const compositor = new Compositor();
        compositor.layers.push(createBackgroundLayer(level.backgrounds, sprites));        
        compositor.layers.push(createMarioLayer(mario));        

        function update() {
            compositor.draw(context);
            requestAnimationFrame(update);
        }

        update();        
    });