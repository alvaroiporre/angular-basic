import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html'
})
export class CounterPageComponent {
  counter = 0;

  counterSignal = signal(0);

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update(current => current + value);
  }

  resetCounter() {
    this.counter = 0;

    this.counterSignal.set(0);
  }
}
