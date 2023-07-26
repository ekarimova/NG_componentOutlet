import { Component } from '@angular/core';

@Component({
  selector: 'app-blue-card',
  template: `
    <div class="blue-card">
      BLUE CARD
    </div>
  `,
  styles: [`
    .blue-card {
      display: block;
      width: 300px;
      min-height: 200px;
      background-color: royalblue;
      margin: 1rem;
      padding: 1rem;
      text-align: center;
    }
  `]
})
export class BlueCardComponent {

}
