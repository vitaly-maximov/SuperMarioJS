import Compositor from "/js/Compositor.js"
import Timer from "/js/Timer.js"

import {loadLevel} from "/js/loaders.js"
import {loadMarioSprites} from "/js/sprites.js"

import {createMario} from "/js/entities.js"
import {setupKeyboard} from "/js/input.js"

const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

Promise
    .all([
        loadMarioSprites(), 
        loadLevel("1-1")])
    .then(([marioSprite, level]) => {
        
        const mario = createMario(marioSprite);

        level.entities.add(mario);

        const timer = new Timer();
        timer.updateState = (time) => {
            level.update(time);
        }
        timer.updateFrame = () => {
            level.compositor.draw(context);
        }
        timer.start();

        setupKeyboard(mario);

        ["mousedown", "mousemove"].forEach(eventName => {
            canvas.addEventListener(eventName, event => {
                if (event.buttons === 1) {
                    mario.velocity.set(0, 0);
                    mario.position.set(event.offsetX, event.offsetY);
                }
            });
        });
    });