import * as shuffle from 'lodash/fp/shuffle';
import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import * as view from './pop-up-modal.template.html';
import { padTime } from '../../utils';

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

    private timeChanged(value: any) {
        if (!value) return;
        const newVal = { ...value };
        Object.keys(newVal)
            .forEach(k => newVal[k] = padTime(newVal[k]));

        return newVal;
    }

    reset() {
        (this as any).dispatchEvent(new CustomEvent('reset-clicked'));
    }
}