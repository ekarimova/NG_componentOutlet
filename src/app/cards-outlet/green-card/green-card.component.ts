import { Component } from '@angular/core';

@Component({
  selector: 'app-green-card',
  template: `
    <div class="green-card">
      GREEN CARD
    </div>
  `,
  styles: [`
    .green-card {
      display: block;
      width: 300px;
      min-height: 200px;
      background-color: mediumseagreen;
      margin: 1rem;
      padding: 1rem;
      text-align: center;
    }
  `]
})
export class GreenCardComponent {

}
