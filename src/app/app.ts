import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [Header],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('tic-tac-toe-signal-store');
}
