import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1 style="font-size: 60px; font-family: Ebrima; color: #362217">
        *ngComponentOutlet
      </h1>

    </div>
    <div>
      <app-cards-outlet></app-cards-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
}
