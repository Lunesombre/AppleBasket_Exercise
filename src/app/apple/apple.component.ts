import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Apple } from '../apple.model';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css'],
})
export class AppleComponent {
  randomKeyNumber:number = Math.ceil(Math.random()*5)
  @Input()
  apple!: Apple;

  @Output()
  remove = new EventEmitter<Apple>();
  removeThatApple(value: Apple) {
    this.remove.emit(value);
  }

  @Output()
  playSound = new EventEmitter<HTMLAudioElement>();
  play(value:HTMLAudioElement){
    this.playSound.emit(value);
  }
}
