import Board, { Coordinate, SymbolType } from './Board';

export class Game {
    private _lastSymbol: SymbolType = ' ';
    private _board: Board = new Board();

    private validatesMove = (symbol: SymbolType, x: Coordinate, y: Coordinate) => {
       //if first move
       if (this._lastSymbol === ' ' && symbol === 'O') {
            throw new Error('Invalid first player');
        }
        //if not first move but player repeated
        else if (this._lastSymbol === symbol) {
            throw new Error('Invalid next player');
        }
        //if not first move but play on an already played tile
        else if (this._board.TileAt(x, y).Symbol !== ' ') {
            throw new Error('Invalid position');
        }
    }

    public Play(symbol: SymbolType, x: Coordinate, y: Coordinate): void {

        this.validatesMove(symbol, x, y);
        // update game state
        this._lastSymbol = symbol;
        this._board.AddTileAt(symbol, x, y);
    }

    private isRowFullyOccupied(x: Coordinate) {
        return this._board.TileAt(x, 0).Symbol !== ' ' &&
            this._board.TileAt(x, 1).Symbol !== ' ' &&
            this._board.TileAt(x, 2).Symbol !== ' '

    }

    public Winner(): SymbolType {
        if (this.isRowFullyOccupied(0)) {
            //if first row is full with same symbol
            if (this._board.TileAt(0, 0).Symbol ===
                this._board.TileAt(0, 1).Symbol &&
                this._board.TileAt(0, 2).Symbol === this._board.TileAt(0, 1).Symbol) {
                return this._board.TileAt(0, 0).Symbol;
            }
        }

        if (this.isRowFullyOccupied(1)) {
            //if middle row is full with same symbol
            if (this._board.TileAt(1, 0).Symbol ===
                this._board.TileAt(1, 1).Symbol &&
                this._board.TileAt(1, 2).Symbol ===
                this._board.TileAt(1, 1).Symbol) {
                return this._board.TileAt(1, 0).Symbol;
            }
        }

        if (this.isRowFullyOccupied(2)) {
            //if middle row is full with same symbol
            if (this._board.TileAt(2, 0).Symbol ===
                this._board.TileAt(2, 1).Symbol &&
                this._board.TileAt(2, 2).Symbol ===
                this._board.TileAt(2, 1).Symbol) {
                return this._board.TileAt(2, 0).Symbol;
            }
        }

        return ' ';
    }
}