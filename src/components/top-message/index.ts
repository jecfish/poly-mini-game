
import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import * as view from './top-message.template.html';
import { padTime } from '../../utils';

export class MyTopMessage extends PolymerElement {
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

    

}