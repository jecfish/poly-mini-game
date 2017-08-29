import * as shuffle from 'lodash/fp/shuffle';
import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-if';
import * as view from './app.template.html';

export class MyApp extends PolymerElement {

    cards: Card[];
    totalSeconds = 0;
    timer: any = 0;
    currentTime = { hour: 0, minute: 0, second: 0 };
    isGameCompleted = false;

    // Define a string template instead of a `<template>` element.
    static get template() {
        return view;
    }

    constructor() {
        super();
    }

    static get properties() {
        return {
            isGameCompleted: {
                type: Boolean,
            },
        };
    }

    ready() {
        super.ready();
        this.cards = this.shuffleCards();
    }

    private shuffleCards(): Card[] {
        const ids = ['a', 'b', 'c', 'd', 'e', 'f'];
        const cards = [...ids, ...ids];
        const imgBaseUrl = 'static/images/avengers/%img.jpg';
        const list = cards.map((card, id) => (
            {
                id,
                coverImageUrl: imgBaseUrl.replace('%img', 'cover'),
                imageUrl: imgBaseUrl.replace('%img', 'card-' + card),
                isMatched: false,
                isFlipped: false
            }
        ));

        return shuffle(list);
    }

    resetGame() {
        this.cards = this.shuffleCards();
        this.totalSeconds = 0;
        this.timer = clearInterval(this.timer);
        this.currentTime = { hour: 0, minute: 0, second: 0 };
        this.isGameCompleted = false;
    }

    // when click on any card first time, start the game timer 
    startGame() {
        // game is started
        if (this.timer) {
            return;
        }

        this.totalSeconds = 0;
        this.timer = setInterval(() => this.updateTime(), 1000);
    }

    stopGame() {
        this.timer = clearInterval(this.timer);
        this.isGameCompleted = true;
    }

    // update the time every second
    updateTime() {
        this.totalSeconds++;

        const oneSecond = 1;
        const secondsInMinute = oneSecond * 60;
        const secondsInHour = 60 * secondsInMinute;
        const minutesInHour = 60;

        const hours = Math.floor(this.totalSeconds / secondsInHour);
        const minutes = Math.floor(this.totalSeconds / secondsInMinute) - (hours * minutesInHour);
        const seconds = this.totalSeconds - (hours * secondsInHour + minutes * secondsInMinute);

        this.currentTime = { hour: hours, minute: minutes, second: seconds };
    }
}