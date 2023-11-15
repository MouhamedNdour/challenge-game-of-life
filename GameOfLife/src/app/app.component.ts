import { Component, OnInit } from '@angular/core';
import { Board } from './Models/board';
import { CellState } from './Enums/CellState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  numCols = 30;
  numRows = 30;
  generation = 0;
  gameStatus = 0; // -1 non actif | 0 actif | 1 pause 
  board: Board;

  constructor() {
    this.board = new Board(this.numCols, this.numRows);
  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.gameStatus === 0) {
        this.board.checkBoard();
        this.generation++;
      }
    }, 4000);
  }

  onClick(pRow: number, pCol: number): void {
    this.board.toggleCellStatus(pRow, pCol);
  }

  onClickStopOrStart(): void {
    this.gameStatus = this.gameStatus === 0 ? 1 : 0;
  }
  
  onReset() {
    this.board.resetBoard();
    this.generation = 0;
  }
}
