
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

// window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example', require('./components/Example.vue'));

// const app = new Vue({
//     el: '#app'
// });

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
import Example from './components/Example.vue'
import DisplayItem from './components/DisplayItem.vue';
import CreateItem from './components/CreateItem.vue';
import EditItem from './components/EditItem';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

// lazy load components
// const Example = (resolve) => require(['./components/Example.vue'], resolve)

const routes = [
    {
        name: 'display-item',
        path: '/',
        component: DisplayItem
    },
    {
        name: 'create-item',
        path: '/items/create',
        component: CreateItem
    },
    {
        name: 'edit-item',
        path: '/items/:id/edit',
        component: EditItem
    }
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue(
    Vue.util.extend(
        { router }, 
        App
    )
).$mount('#app');