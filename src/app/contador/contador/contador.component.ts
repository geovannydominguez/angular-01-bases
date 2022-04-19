import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{ title }} </h1>
        <h3>La base es <strong>{{ base }}</strong></h3>


        <button (click)="acumular(base)">+{{ base }}</button>
        <span> {{ myNumber }} </span>
        <button (click)="acumular(-base)">-{{ base }}</button>
    `
})
export class ContadorComponent {
    title: string = 'Contador App';
    myNumber: number = 10;
    base: number = 5;

    acumular( valor: number ) {
        this.myNumber += valor;
    }
}