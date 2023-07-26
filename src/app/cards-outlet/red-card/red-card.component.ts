import { Component } from '@angular/core';

@Component({
  selector: 'app-red-card',
  template: `
    <div class="red-card">
        RED CARD
    </div>
  `,
  styles: [`
    .red-card {
      display: block;
      width: 300px;
      min-height: 200px;
      background-color: indianred;
      margin: 1rem;
      padding: 1rem;
      text-align: center;
    }
  `]
})
export class RedCardComponent {

}
