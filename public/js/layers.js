function drawBackground(background, context, sprites) {
    background.ranges.forEach(([x0, x1, y0, y1]) => {
        for (let x = x0; x < x1; ++x) {
            for (let y = y0; y < y1; ++y) {
                sprites.drawTile(background.tile, context, x, y);
            }
        }
    });
}

export function createBackgroundLayer(backgrounds, sprites) {
    const backgroundBuffer = document.createElement("canvas");
    backgroundBuffer.width = 400;
    backgroundBuffer.height = 240;

    backgrounds.forEach(background => drawBackground(background, backgroundBuffer.getContext("2d"), sprites));

    return context => context.drawImage(backgroundBuffer, 0, 0);
}

export function createMarioLayer(mario) {    
    return context => mario.draw(context);
}