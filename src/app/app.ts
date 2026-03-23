import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { GameBoard } from './components/game-board/game-board';
import { WinnerModal } from './components/winner-modal/winner-modal';
import { PlayerInput } from './components/player-input/player-input';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, GameBoard, WinnerModal, PlayerInput],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('tic-tac-toe-signal-store');
}
