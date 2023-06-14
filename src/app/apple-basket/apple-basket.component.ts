import { Component } from '@angular/core';
import { Apple } from '../apple.model';

@Component({
  selector: 'app-apple-basket',
  templateUrl: './apple-basket.component.html',
  styleUrls: ['./apple-basket.component.css'],
})
export class AppleBasketComponent {
  appleList: Apple[] = [];
  counter: number = 0;

  addApple(): void {
    this.counter++;
    const newApple: Apple = { id: this.counter };
    this.appleList.push(newApple);

    console.log(newApple);
  }

  removeApple(apple: Apple): void {
    const index = this.appleList.indexOf(apple);
    if (index !== -1) {
      this.appleList.splice(index, 1);
    }
  }
}
