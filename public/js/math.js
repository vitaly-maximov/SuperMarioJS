export class Vector {
    constructor(x, y) {
        this.set(x, y);
    }

    set(x, y) {
        this.x = x;
        this.y = y
    }

    static empty() {
        return new Vector(0, 0);
    }
}

export class Matrix {
    constructor() {
        this.grid = [];
    }

    get(x, y) {
        if (this.grid[x]) {
            return this.grid[x][y];
        }
        return undefined;
    }

    set(x, y, value) {
        if (!this.grid[x]) {
            this.grid[x] = [];
        }

        this.grid[x][y] = value;
    }

    forEach(callback) {
        this.grid.forEach((column, x) => {
            column.forEach((value, y) => {
                callback(value, x, y);
            });
        });
    }
}