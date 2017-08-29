
import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-repeat';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import * as view from './cards.template.html';

export class MyCards extends GestureEventListeners(PolymerElement) {
    static get template() {
        return view;
    }

    constructor() {
        super();
    }

    static get properties() {
        return {
            cards: []
        };
    }

    getClass(item) {
        return (item.isFlipped || item.isMatched) ? 'card flipped' : 'card';
    }

    cards: Card[];

    private get isReachMaxFlippedCard() {
        const maxFlippedCard = 2;
        return this.cards
            .filter(x => x.isFlipped && !x.isMatched).length >= maxFlippedCard;
    }

    private get isAllCardsMatched() {
        const totalCompleted = this.cards
            .filter(x => x.isMatched === true).length;

        return this.cards.length === totalCompleted;
    }

    private isMatch([image1, image2]: string[]) {
        return image1 === image2;
    }

    flip({ model }) {
        const card = { ...model.item };
        const index = model.index;
        // console.log(card, model.index);
        // cannot flip card under these condition
        if (this.isReachMaxFlippedCard || card.isMatched || card.isFlipped) {
            return;
        }

        // notify parent everytime card flipped
        (this as any).dispatchEvent(new CustomEvent('card-flipped'));

        // flip the card immutably
        this.cards = this.cards.map(x => ({ ...x, isFlipped: (x.id === card.id) ? true : x.isFlipped }));

        // end here if not hit max
        if (!this.isReachMaxFlippedCard) {
            return;
        }

        // get list of flipped card images
        const images = this.cards
            .filter(x => x.isFlipped && !x.isMatched)
            .map(x => x.imageUrl);

        if (this.isMatch(images)) {
            this.cards
                .filter(x => x.isFlipped && !x.isMatched)
                .forEach(x => {
                    x.isMatched = true;
                });

            if (this.isAllCardsMatched) {
                // notify parent everytime all cards matched
                (this as any).dispatchEvent(new CustomEvent('all-cards-matched'));
            }
        }

        // close all cards after 400 miliseconds
        setTimeout(() => {
            // reset all card to no flipped
            this.cards = this.cards.map(x => ({
                ...x,
                isFlipped: false
            }));
        }, 400);
    }
}