import * as kebabCase from 'lodash/fp/kebabCase';
import { MyApp } from './app';
import { MyEmpList } from './emp-list';

// add custom elements here
const elements = {
    MyApp,
    MyEmpList
};

// register all as kebab case
Object.keys(elements)
    .forEach(key => {
        customElements.define(kebabCase(key), elements[key])
    });
