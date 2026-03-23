import { Component, input } from '@angular/core';

@Component({
  selector: 'app-player-input',
  imports: [],
  templateUrl: './player-input.html',
})
export class PlayerInput {
  symbol = input();
  name = input('Player');
}
