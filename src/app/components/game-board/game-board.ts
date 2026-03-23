import { Component, input, output, signal } from '@angular/core';

const GAME_BOARD: [string[], string[], string[]] = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

@Component({
  selector: 'app-game-board',
  imports: [],
  templateUrl: './game-board.html',
})
export class GameBoard {
  gameBoard = signal<[string[], string[], string[]]>(GAME_BOARD);
  currentPlayerSymbol = input<string>('');

  cellChanged = output();

  onCellClick(row: number, col: number) {
    this.gameBoard.update((board) => {
      board[row][col] = this.currentPlayerSymbol();
      return board;
    });

    this.cellChanged.emit();
  }
}
