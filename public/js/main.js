import Compositor from "/js/Compositor.js"
import Timer from "/js/Timer.js"
import {loadLevel} from "/js/loaders.js"
import {loadSprites, loadMarioSprites} from "/js/sprites.js"
import {createBackgroundLayer, createMarioLayer} from "/js/layers.js"
import {createMario} from "/js/entities.js"

const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

Promise
    .all([
        loadSprites(), 
        loadMarioSprites(), 
        loadLevel("1-1")])
    .then(([sprites, marioSprite, level]) => {
        
        const mario = createMario(marioSprite);

        const compositor = new Compositor();
        compositor.layers.push(createBackgroundLayer(level.backgrounds, sprites));        
        compositor.layers.push(createMarioLayer(mario));       

        const timer = new Timer();
        timer.updateState = (time) => {
            mario.update(time);
        }
        timer.updateFrame = () => {
            compositor.draw(context);
        }
        timer.start();
    });