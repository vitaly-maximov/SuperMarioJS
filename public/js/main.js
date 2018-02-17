function loadImage(url) {
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener("load", () => {
            resolve(image);
        });
        image.src = url;
    });
}

class SpriteSheet
{
    constructor(image, spriteWidth, spriteHeight)
    {
        this.image = image;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.tiles = new Map();
    }

    define(name, spriteX, spriteY)
    {
        this.tiles.set(name, { x: spriteX, y: spriteY });
    }

    draw(name, context, x, y)
    {
        const sprite = this.tiles.get(name);
        context.drawImage(
            this.image, 
            sprite.x, sprite.y, this.spriteWidth, this.spriteHeight, 
            x, y, this.spriteWidth, this.spriteHeight);
    }
}

const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

loadImage("/img/tiles.png").then(image => {
    const sprites = new SpriteSheet(image, 16, 16);
    sprites.define("ground", 0, 0);
    sprites.draw("ground", context, 145, 245);
});
