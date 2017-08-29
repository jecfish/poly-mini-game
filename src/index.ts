import * as kebabCase from 'lodash/fp/kebabCase';
import { MyApp } from './app';
import { MyEmpList } from './emp-list';
import { environment } from './environments/environment';

console.log(environment.production);

// add custom elements here
const elements = {
    MyApp,
    MyEmpList
};

// register all components as kebab case
Object.keys(elements)
    .forEach(key => {
        customElements.define(kebabCase(key), elements[key])
    });
