import './css/site.css';
import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: require('./components/home/home.vue.html')},
    {path: '/postAJob', component: require('./components/postAJob/postAJob.vue.html')},
    {path: '/jobs', component: require('./components/jobs/jobs.vue.html')},
    {path: '/companies', component: require('./components/companies/companies.vue.html')},
    {
        path: '/job/:jobId', component: require('./components/job/job.vue.html')
    }


];

new Vue({
    el: '#app-root',
    router: new VueRouter({mode: 'history', routes: routes}),
    render: h => h(require('./components/app/app.vue.html'))
});
