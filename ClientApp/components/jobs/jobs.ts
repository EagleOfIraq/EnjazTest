import Vue from 'vue';
import {Component} from 'vue-property-decorator';

interface Company {
    id: number;
    name: string;
    url: string;
    location: string;
    logoUrl: string;
    jobs :Job[];
}


interface Job {
    id: number;
    title: string;
    description: string;
    howToApply: string;
    type: string;
    url: string;
    createdAt: string;
    company: Company;
}

@Component
export default class JobsComponent extends Vue {
    forecasts: Job[] = [];

    mounted() {
        fetch('api/Jobs/')
            .then(response => response.json() as Promise<Job[]>)
            .then(data => {
                this.forecasts = data;
            });
    }
}
