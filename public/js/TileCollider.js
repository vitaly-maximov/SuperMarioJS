import TileResolver from "/js/TileResolver.js"

export default class TileCollider {
    constructor(tiles) {
        this.tileResolver = new TileResolver(tiles);
    }

    checkY(entity) {
        const matches = this.tileResolver.searchByRanges(
            entity.position.x, entity.position.x + entity.size.x,
            entity.position.y, entity.position.y + entity.size.y);

        matches.forEach(match => {
            if (match.tile.name !== "ground") {
                return;
            }

            if (entity.velocity.y > 0) {
                if (entity.position.y + entity.size.y > match.y1) {
                    entity.position.y = match.y1 - entity.size.y;
                    entity.velocity.y = 0;
                }
            } else if (entity.velocity.y < 0) {
                if (entity.position.y < match.y2) {
                    entity.position.y = match.y2;
                    entity.velocity.y = 0;
                }
            }
        });
    }

    test(entity) {
        this.checkY(entity);
    }
}