import angular from 'angular';
import Vue from 'vue' // <<
import ngVue from 'ngVue' // <<

import Hello from '../Hello.vue'; // Vue component

import '../services/hello.service';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
    this.person = { firstName: 'John', lastName: 'Doe' };
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ngVue', 'services.hello-service']) // <<
  .directive('app', app)
  .directive('hello', createVueComponent => createVueComponent(Vue.component('Hello', Hello)))
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;