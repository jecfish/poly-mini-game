import * as shuffle from 'lodash/fp/shuffle';
import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import * as view from './pop-up-modal.template.html';
import { timeFormatter } from '../../utils';

export class MyPopUpModal extends GestureEventListeners(PolymerElement) {
    // Define a string template instead of a `<template>` element.
    static get template() {
        return view;
    }

    constructor() {
        super();
    }

    static get properties() {
        return {
            time: {
                type: Object,
            },
            displayTime: {
                type: Object,
                computed: 'timeChanged(time)'
            }
        };
    }

    private timeChanged(value: PolyTest.Time) {
       return timeFormatter(value);
    }

    reset() {
        (this as any).dispatchEvent(new CustomEvent('reset-clicked'));
    }
}