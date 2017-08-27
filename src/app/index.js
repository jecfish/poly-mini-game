
// Element is the same as Polymer.Element in 2.x
// Modules give you the freedom to rename the members that you import
import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/paper-button/paper-button';
import { IronResizableBehavior } from '@polymer/iron-resizable-behavior/iron-resizable-behavior';
// import * as Async from '@polymer/polymer/lib/utils/async';
import view from './app.template.html';

// Async.microTask.run(callback);

// Added "export" to export the MyApp symbol from the module
export class MyApp extends PolymerElement {

    // Define a string template instead of a `<template>` element.
    static get template() {
        return view;
    }

    constructor() {
        super();
    }

    // properties, observers, etc. are identical to 2.x
    static get properties() {
        return {
            name: {
                type: String,
                value: 'jecelyn'
            },
            owner: {
                type: String,
                value: "Daniel",
            }
        };
    }
}

// customElements.define(kebabCase('MyApp'), MyApp);