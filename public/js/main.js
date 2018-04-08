import Compositor from "/js/Compositor.js"
import Timer from "/js/Timer.js"
import Keyboard from "/js/Keyboard.js"
import {loadLevel} from "/js/loaders.js"
import {loadMarioSprites} from "/js/sprites.js"

import {createMario} from "/js/entities.js"

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

        const keyboard = new Keyboard();

        const spaceKey = 32;
        keyboard.subscribe(spaceKey, state => {
            if (state === 0) {
                mario.jump.cancel();
            } else {
                mario.jump.start();
            }
        })
    });