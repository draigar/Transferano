import Vue from 'vue';

const request = () => {
    // route and handle all request and response to the http handler
    const $http = this.http
    console.log($http);
}

Vue.prototype.$req = request