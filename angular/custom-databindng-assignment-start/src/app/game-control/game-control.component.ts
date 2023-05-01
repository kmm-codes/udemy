import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  myNumber: number = 0;
  intervalRef:any;
  @Output() numberEventEmitter: EventEmitter<number> = new EventEmitter();
  @Output() resetNumbersEventEmitter: EventEmitter<boolean> = new EventEmitter();

  startGameClicked() {
    this.intervalRef = setInterval(() => {
      this.numberEventEmitter.emit(this.myNumber++);
    }, 1000);
  }
  stopGameClicked() {
    clearInterval(this.intervalRef);
  }
  resetGameClicked() {
    clearInterval(this.intervalRef);
    this.resetNumbersEventEmitter.emit(true);
  }
}
