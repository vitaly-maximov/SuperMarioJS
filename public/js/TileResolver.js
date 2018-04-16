export default class TileResolver {
    constructor(tiles, tileSize = 16) {
        this.tiles = tiles;
        this.tileSize = tileSize;
    }

    toIndex(position) {
        return Math.floor(position / this.tileSize);
    }

    toIndexRange(pos1, pos2) {
        const pMax = Math.ceil(pos2 / this.tileSize) * this.tileSize;
        const indexes = [];

        let pos = pos1;
        do {
            indexes.push(this.toIndex(pos));
            pos += this.tileSize;
        } while (pos < pMax);
        return indexes;
    }

    getByIndex(indexX, indexY) {
        const tile = this.tiles.get(indexX, indexY);
        const x1 = indexX * this.tileSize;
        const x2 = x1 + this.tileSize;
        const y1 = indexY * this.tileSize;
        const y2 = y1 + this.tileSize;

        if (tile) {
            return { x1, x2, y1, y2, tile };
        }
    }
    
    searchByPosition(positionX, positionY) {
        return this.getByIndex(
            this.toIndex(positionX),
            this.toIndex(positionY));
    }

    searchByRanges(x1, x2, y1, y2) {
        const tiles = [];

        this.toIndexRange(x1, x2).forEach(indexX => {
            this.toIndexRange(y1, y2).forEach(indexY => {
                const tile = this.getByIndex(indexX, indexY);
                if (tile) {
                    tiles.push(tile);
                }                
            });
        });

        return tiles;
    }
}