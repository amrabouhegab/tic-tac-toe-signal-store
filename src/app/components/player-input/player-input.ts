import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-player-input',
  imports: [FormsModule],
  templateUrl: './player-input.html',
})
export class PlayerInput {
  name = signal('Player');
  isEdit = signal(false);

  symbol = input();
  initialName = input('Player');
  nameChanged = output<string>();

  onNameChange(value: string) {
    console.log(value);
    this.nameChanged.emit(value);
  }

  onEdit() {
    this.isEdit.set(true);
  }

  onSave() {
    this.isEdit.set(false);
    this.nameChanged.emit(this.name());
  }
}
