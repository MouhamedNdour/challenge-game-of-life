import { Component, OnInit } from '@angular/core';
import { Board } from './Models/board';
import { CellState } from './Enums/CellState';
import { GameStatus} from './Enums/GameStatus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  numCols = 30;
  numRows = 30;
  generation = 0;
  gameStatus = GameStatus.ACTIVE;
  board: Board;
  enumCellState = CellState;
  enumGameStatus = GameStatus;
  

  constructor() {
    this.board = new Board(this.numCols, this.numRows);
  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.gameStatus === GameStatus.ACTIVE) {
        this.board.checkBoard();
        this.generation++;
      }
    }, 4000);
  }

  onClick(selectedRow: number, selectedCol: number): void {
    this.board.toggleCellStatus(selectedRow, selectedCol);
  }

  onClickStopOrStart(): void {
    this.gameStatus = this.gameStatus === GameStatus.ACTIVE ? GameStatus.PAUSE : GameStatus.ACTIVE;
  }

  getCellState(row: number, col: number): CellState {
    return this.board.getCellStatus(row, col);
  }

  getGameStatus(): GameStatus {
    return this.gameStatus;
  }
  
  onReset() {
    this.board.resetBoard();
    this.generation = 0;
  }
}