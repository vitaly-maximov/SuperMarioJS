export function createBackgroundLayer(level, sprites) {
    const backgroundBuffer = document.createElement("canvas");
    const context = backgroundBuffer.getContext("2d");

    backgroundBuffer.width = 400;
    backgroundBuffer.height = 240;

    level.tiles.forEach((tile, x, y) => {
        sprites.drawTile(tile.name, context, x, y);
    });

    return context => context.drawImage(backgroundBuffer, 0, 0);
}

export function createMarioLayer(entities) {    
    return context => entities.forEach(entity => entity.draw(context));
}

export function createCollisionLayer(level) {
    const tileResolver = level.tileCollider.tileResolver;
    const tileSize = tileResolver.tileSize;

    const resolvedTiles = [];

    const getByIndexOriginal = tileResolver.getByIndex;
    tileResolver.getByIndex = (x, y) => {
        resolvedTiles.push({x, y});
        return getByIndexOriginal.call(tileResolver, x, y);
    };

    return (context) => {
        /*context.strokeStyle = "blue";
        resolvedTiles.forEach(({x, y}) => {
            context.beginPath();
            context.rect(x * tileSize, y * tileSize, tileSize, tileSize);
            context.stroke();
        });*/

        resolvedTiles.length = 0;

        /*context.strokeStyle = "red";
        level.entities.forEach((entity) => {
            context.beginPath();
            context.rect(entity.position.x, entity.position.y, entity.size.x, entity.size.y);
            context.stroke();
        });*/
    };
}