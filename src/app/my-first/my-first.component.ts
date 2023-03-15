import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.scss']
})
export class MyFirstComponent {
  headerTitle = 'My first component';
  public event!: MouseEvent;
  public clientX = 0;
  public clientY = 0;
  public onEvent(event: MouseEvent): void {
    this.event = event;
  }
  public coordinates(event: MouseEvent): void {
    this.clientX = event.clientX;
    this.clientY = event.clientY;
  }
}
