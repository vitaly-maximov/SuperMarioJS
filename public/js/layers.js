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