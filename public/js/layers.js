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
    const pos = { x: 50, y: 50 };
    let incX = 2;
    let incY = 2;

    return context => {
        mario.draw("idle", context, pos.x, pos.y);

        if (pos.x + incX < 0 || pos.x + incX > 386)
        {
            incX *= -1;
        }
        if (pos.y + incY < 0 || pos.y + incY > 176)
        {
            incY *= -1;
        }

        pos.x += incX;
        pos.y += incY; 
    } 
}