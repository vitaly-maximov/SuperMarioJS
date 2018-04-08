import Level from "/js/Level.js"
import {createBackgroundLayer, createMarioLayer} from "/js/layers.js"
import {loadSprites} from "/js/sprites.js"

export function loadImage(url) {
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener("load", () => {
            resolve(image);
        });
        image.src = url;
    });
}

export function loadLevel(name) {
    return Promise
        .all([
            loadSprites(), 
            fetch(`/levels/${name}.json`)
                .then(content => content.json())])
        .then(([sprites, json]) => {

            const level = new Level();

            level.compositor.layers.push(createBackgroundLayer(json.backgrounds, sprites));
            level.compositor.layers.push(createMarioLayer(level.entities));

            return level;
        });
}