import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-repeat';
import * as view from './emp-list.template.html';

export class MyEmpList extends PolymerElement {
    employees: any[];

    static get template() {
        return view;
    }

    constructor() {
        super();
        this.employees = [
            { first: 'Boblii', last: 'Li' },
            { first: 'Ayesha', last: 'Johnson' },
            { first: 'Fatma', last: 'Kumari' },
            { first: 'Tony', last: 'Morelli' }
        ];
    }
}