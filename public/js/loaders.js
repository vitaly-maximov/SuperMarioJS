import Level from "/js/Level.js"
import {createBackgroundLayer, createMarioLayer, createCollisionLayer} from "/js/layers.js"
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

function createTiles(level, backgrounds) {
    backgrounds.forEach(background => {        
        background.ranges.forEach(([x1, x2, y1, y2]) => {
            for (let x = x1; x < x2; ++x) {
                for (let y = y1; y < y2; ++y) {
                    level.tiles.set(x, y, { name: background.tile });
                }
            }
        });
    })
}

export function loadLevel(name) {
    return Promise
        .all([
            loadSprites(), 
            fetch(`/levels/${name}.json`)
                .then(content => content.json())])
        .then(([sprites, json]) => {

            const level = new Level();

            createTiles(level, json.backgrounds);

            level.compositor.layers.push(createBackgroundLayer(level, sprites));
            level.compositor.layers.push(createMarioLayer(level.entities));
            level.compositor.layers.push(createCollisionLayer(level));
            
            return level;
        });
}