export default class SpriteSheet
{
    constructor(image, spriteWidth, spriteHeight)
    {
        this.image = image;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.tiles = new Map();
    }

    define(name, xIndex, yIndex)
    {
        this.defineTile(
            name, 
            xIndex * this.spriteWidth, 
            yIndex * this.spriteHeight, 
            this.spriteWidth, 
            this.spriteHeight);
    }

    defineTile(name, spriteX, spriteY, spriteWidth, spriteHeight)
    {
        this.tiles.set(
            name, 
            { 
                x: spriteX, 
                y: spriteY,
                width: spriteWidth,
                height: spriteHeight
            });
    }

    draw(name, context, x, y)
    {
        const sprite = this.tiles.get(name);
        context.drawImage(
            this.image, 
            sprite.x, sprite.y, sprite.width, sprite.height, 
            x, y, sprite.width, sprite.height);
    }

    drawTile(name, context, xIndex, yIndex)
    {
        this.draw(name, context, xIndex * this.spriteWidth, yIndex * this.spriteHeight);
    }
}