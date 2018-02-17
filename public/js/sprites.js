import SpriteSheet from "/js/SpriteSheet.js"
import {loadImage} from "/js/loaders.js"

export function loadSprites() {
    return loadImage("/img/tiles.png").then(image => {
        const sprites = new SpriteSheet(image, 16, 16);
        sprites.define("ground", 0, 0);
        sprites.define("sky", 3, 23);
        return sprites;
    })
}

export function loadMarioSprites() {
    return loadImage("/img/characters.gif").then(image => {
        const sprites = new SpriteSheet(image, 16, 16);
        sprites.defineTile("idle", 276, 44, 16, 16);
        return sprites;
    })
}