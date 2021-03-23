export type Coordinate = 0 | 1 | 2;
export type SymbolType = " " | "X" | "O";
interface Tile {
    X: Coordinate;
    Y: Coordinate;
    Symbol: SymbolType;
}

export default class Board {
    private _plays: Tile[] = [];

    constructor() {
        this.instantiateTiles();
    }

    private instantiateTiles() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const tile: Tile = {X: i as Coordinate, Y: j as Coordinate, Symbol: ' '};
                this._plays.push(tile);
            }
        }
    }

    public TileAt(x: Coordinate, y: Coordinate): Tile {
        return this._plays.find((tile: Tile) => tile.X === x && tile.Y === y)!
    }

    public AddTileAt(symbol: SymbolType, x: Coordinate, y: Coordinate): void {
        this.TileAt(x, y).Symbol = symbol;
    }
}