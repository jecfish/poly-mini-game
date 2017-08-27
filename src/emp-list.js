
// Element is the same as Polymer.Element in 2.x
// Modules give you the freedom to rename the members that you import
import { Element as PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';
import '../node_modules/@polymer/paper-button/paper-button.js';
import { IronResizableBehavior } from '../node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js';
import '../node_modules/@polymer/polymer/lib/elements/dom-repeat.js';

// Async.microTask.run(callback);

// Added "export" to export the MyApp symbol from the module
export class MyEmpList extends PolymerElement {

    // Define a string template instead of a `<template>` element.
    static get template() {
        return `<template is="dom-repeat" items="{{employees}}">
                <div>First name: <span>{{item.first}}</span></div>
                <div>Last name: <span>{{item.last}}</span></div>
                <p></p>
            </template>
            `
    }

    constructor() {
        super();
        this.employees = [
            {first: 'Bob', last: 'Li'},
            {first: 'Ayesha', last: 'Johnson'},
            {first: 'Fatma', last: 'Kumari'},
            {first: 'Tony', last: 'Morelli'}
          ];
    }

    // properties, observers, etc. are identical to 2.x
    static get properties() {
    }
}

customElements.define('my-emp-list', MyEmpList);