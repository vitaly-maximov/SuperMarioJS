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
        this.tiles.set(
            name, 
            { x: xIndex * this.spriteWidth, y: yIndex * this.spriteHeight });
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