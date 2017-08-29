
import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import * as view from './app.template.html';

export class MyApp extends PolymerElement {

    // Define a string template instead of a `<template>` element.
    static get template() {
        return view;
    }

    constructor() {
        super();
    }

    handleIt() {
        console.log('super boo');
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
                value: "Daniel Ha",
            }
        };
    }
}