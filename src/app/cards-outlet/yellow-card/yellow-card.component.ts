import {Component, Inject} from '@angular/core';
import {DATA} from "../cards-outlet.component";

@Component({
  selector: 'app-yellow-card',
  template: `
    <div class="yellow-card">
      {{cardHeader}}
      <br>
<!--      <div style="display: inline-flex">-->
<!--        <div style="width: 40%; margin: 20px;"><ng-content></ng-content></div>-->
<!--        <div style="width: 40%; margin: 20px"><ng-content></ng-content></div>-->
<!--      </div>-->
    </div>
  `,
  styles: [`
    .yellow-card {
      display: block;
      width: 300px;
      min-height: 200px;
      /*width: fit-content;*/
      /*height: fit-content;*/
      background-color: rgba(255, 255, 174, 0.78);
      margin: 1rem;
      padding: 1rem;
      text-align: center;
      color: darkblue;
    }
  `]
})
export class YellowCardComponent {
  cardHeader: string;
  constructor(@Inject(DATA) public text?: string) {
    this.cardHeader = text || 'YELLOW CARD';
  }
}
