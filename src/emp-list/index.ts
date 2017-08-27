
// Element is the same as Polymer.Element in 2.x
// Modules give you the freedom to rename the members that you import
import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
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

    // properties, observers, etc. are identical to 2.x
    static get properties() {
        return undefined;
    }
}