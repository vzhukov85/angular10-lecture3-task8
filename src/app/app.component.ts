import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  condition = false;

  toggle(): void {
    this.condition = !this.condition;
    console.log(this.condition);
  }
}
