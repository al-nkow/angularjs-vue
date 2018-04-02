import angular from 'angular';

class HelloService {
    constructor($http) {
        this.$http = $http;
    }

    sayHello () {
        console.log('=================================');
        console.log('Hello from VUUUUUE!!!', this.$http);
        console.log('=================================');
    }

}

export let helloService;

angular.module('services.hello-service', [])
    .service('HelloService', HelloService)
    .run($injector => { helloService = $injector.get('HelloService') });