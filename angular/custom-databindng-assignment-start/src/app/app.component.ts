import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: number[] = [];

  onNumberIncremented($event: number) {
    this.numbers.push($event)
  }
  resetNumbers(){
    this.numbers = []
  }
  title = 'custom-databindng-assignment-start';
}
