import { CellState } from "../Enums/CellState";

export class Board {
    board!: number[][];

    constructor(pWidth: number, pHeight: number) {
        this.initializeBoard(pWidth, pHeight);
    }

    initializeBoard(width: number, height: number): void {
        this.board = Array.from({ length: width }, () => Array(height).fill(CellState.DEAD));
    }

    getCellStatus(coordX: number, coordY: number): number {
        return this.board[coordX][coordY];
    }

    toggleCellStatus(coordX: number, coordY: number): void {
        this.board[coordX][coordY] = 1 - this.getCellStatus(coordX, coordY);
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

    resetBoard(): void {
        this.board = this.board.map(row => row.map(() => CellState.DEAD));
    }

    checkRules(coordX: number, coordY: number): number {
        const currentStatus = this.board[coordX][coordY];
        const neighbours = this.countAliveNeighbors(coordX, coordY);

        if (currentStatus === CellState.ALIVE && (neighbours === 2 || neighbours === 3)) {
            return CellState.ALIVE;
        } else if (currentStatus === CellState.DEAD && neighbours === 3) {
            return CellState.ALIVE;
        } else {
            return CellState.DEAD;
        }
    }

    private countAliveNeighbors(coordX: number, coordY: number): number {
        const { length } = this.board;
        let aliveNeighborCount = 0;

        for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
            for (let colOffset = -1; colOffset <= 1; colOffset++) {
                if (!(rowOffset === 0 && colOffset === 0)) {
                    const neighborX = (coordX + rowOffset + length) % length;
                    const neighborY = (coordY + colOffset + this.board[0].length) % this.board[0].length;
                    aliveNeighborCount += this.getCellStatus(neighborX, neighborY);
                }
            }
        }

        return aliveNeighborCount;
    }
}