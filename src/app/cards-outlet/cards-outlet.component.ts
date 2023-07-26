import {Component, InjectionToken, OnDestroy, OnInit} from '@angular/core';
import {BlueCardComponent} from "./blue-card/blue-card.component";
import {GreenCardComponent} from "./green-card/green-card.component";
import {RedCardComponent} from "./red-card/red-card.component";
import {YellowCardComponent} from "./yellow-card/yellow-card.component";

export const DATA = new InjectionToken<string>('data');

@Component({
    selector: 'app-cards-outlet',
    styles: [`
        .cards {
            display: inline-flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: space-evenly;
            font-family: 'Showcard Gothic';
            color: whitesmoke;
            font-size: 64px;
        }

        .btn {
            margin: 1rem;
            padding: 1rem;
            color: whitesmoke;
            background-color: darkorchid;
            border-radius: 10px;
            border-width: 2px;
            border-color: darkblue;
            font-size: 36px;
        }

        .btn:hover {
            background-color: orchid;
        }

        .btn:active {
            background-color: darkblue;
        }
    `],
    template: `
        <div class="cards">
            <app-green-card></app-green-card>
            <app-blue-card></app-blue-card>
            <app-red-card></app-red-card>
            <app-yellow-card></app-yellow-card>


            <!--            <ng-container *ngComponentOutlet="blueCardComponent"></ng-container>-->

            <!--            <ng-container *ngComponentOutlet="cards[0]"></ng-container>-->

            <!--            <div *ngFor="let card of cards">-->
            <!--              <ng-container *ngComponentOutlet="card"></ng-container>-->
            <!--            </div>-->
            <!--      <ng-container *ngComponentOutlet="activeCard"></ng-container>-->

            <!--   <ng-container *ngComponentOutlet="yellowCardComponent, content: [[first],[second]]"></ng-container>-->
            <!--   <ng-container *ngComponentOutlet="yellowCardComponent, injector: testInjector"></ng-container>-->
            <!--      <ng-container *ngComponentOutlet="yellowCardComponent, content: [[first],[second]], injector: testInjector"></ng-container>-->

            <!--      <div *ngFor="let card of cards">-->
            <!--        <ng-container *ngComponentOutlet="card, injector: testInjector; content: [[first], [second]]"></ng-container>-->
            <!--      </div>-->

        </div>
        <br>
        <!--    <button class="btn" (click)="changeCard()">CHANGE CARD</button>-->

        <!--    <div #first style="font-size: 18px; font-family: 'Ebrima'">-->
        <!--      <h1>Team 1</h1>-->
        <!--      <main>2 points</main>-->
        <!--    </div>-->
        <!--    <div #second style="font-size: 18px; font-family: 'Ebrima'">-->
        <!--      <h1>Team 2</h1>-->
        <!--      <main>3 points</main>-->
        <!--    </div>-->
    `
})
export class CardsOutletComponent implements OnInit, OnDestroy {
    cardText: string = 'FOOTBALL';
    protected readonly greenCardComponent = GreenCardComponent;
    protected readonly blueCardComponent = BlueCardComponent;
    protected readonly redCardComponent = RedCardComponent;
    // testInjector: Injector;
    // cards: Type<unknown>[] = [this.yellowCardComponent, this.blueCardComponent];
    // activeCard: Type<unknown> | null = null;
    // interval: any;
    protected readonly yellowCardComponent = YellowCardComponent;
    // constructor(private injector: Injector) {
    //   this.testInjector =
    //       Injector.create({providers: [{provide: DATA, useValue: this.cardText}], parent: injector});
    // }

    ngOnInit() {
        // this.changeCard();
        // this.startTimer();
    }

    ngOnDestroy() {
        // clearInterval(this.interval);
    }

    //
    // startTimer() {
    //   this.interval = setInterval(() => {
    //     this.changeCard();
    //   },2000)
    // }
    //
    // public changeCard() {
    //   const activeCardIndex = Math.floor(Math.random() * 4);
    //   this.activeCard = this.cards[activeCardIndex];
    // }

}
