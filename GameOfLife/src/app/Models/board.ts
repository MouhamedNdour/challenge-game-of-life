import { CellState } from "./CellState";

export class Board {
    board!: number[][];

    constructor(pWidth: number, pHeight: number) {
        this.initializeBoard(pWidth, pHeight);
    }

    initializeBoard(width: number, height: number): void {
        this.board = Array.from({ length: width }, () => Array(height).fill(0));
    }

    getCellStatus(coordX: number, coordY: number): number {
        return this.board[coordX][coordY];
    }

    toggleCellStatus(coordX: number, coordY: number): void {
        this.board[coordX][coordY] = this.board[coordX][coordY] === 0 ? 1 : 0;
    }

    checkBoard(): void {
        const tmpBoard: number[][] = [];
        for (let i = 0; i < this.board.length; i++) {
            tmpBoard[i] = [];
            for (let j = 0; j < this.board[i].length; j++) {
                tmpBoard[i].push(this.checkRules(i, j));
            }
        }
        this.board = tmpBoard;
    }

    checkRules(coordX: number, coordY: number): number {
        const width = this.board.length;
        const height = this.board[0].length;

        const xMin = coordX - 1 < 0 ? width - 1 : coordX - 1;
        const xMax = coordX + 1 >= width ? 0 : coordX + 1;
        const yMin = coordY - 1 < 0 ? height - 1 : coordY - 1;
        const yMax = coordY + 1 >= height ? 0 : coordY + 1;

        const currentStatus = this.board[coordX][coordY];
        const neighbours = this.countAliveNeighbors(coordX, coordY);

        if (currentStatus === CellState.ALIVE && (neighbours === 2 || neighbours === 3))
            return CellState.ALIVE;
        if (currentStatus === CellState.DEAD && neighbours === 3)
            return CellState.ALIVE;

        return CellState.DEAD;
    }

    private countAliveNeighbors(coordX: number, coordY: number): number {
        const width = this.board.length;
        const height = this.board[0].length;

        const xMin = coordX - 1 < 0 ? width - 1 : coordX - 1;
        const xMax = coordX + 1 >= width ? 0 : coordX + 1;
        const yMin = coordY - 1 < 0 ? height - 1 : coordY - 1;
        const yMax = coordY + 1 >= height ? 0 : coordY + 1;

        return (
            this.board[xMin][yMin] +
            this.board[xMin][coordY] +
            this.board[xMin][yMax] +
            this.board[coordX][yMin] +
            this.board[coordX][yMax] +
            this.board[xMax][yMin] +
            this.board[xMax][coordY] +
            this.board[xMax][yMax]
        );
    }
}
