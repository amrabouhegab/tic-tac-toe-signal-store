import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { GameBoard } from './components/game-board/game-board';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, GameBoard],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('tic-tac-toe-signal-store');
}
