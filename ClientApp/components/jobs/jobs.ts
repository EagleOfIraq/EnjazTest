import Vue from 'vue';
import {Component} from 'vue-property-decorator';

interface Company {
    id: number;
    name: string;
    url: string;
    location: string;
    logoUrl: string;
    jobs: Job[];
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
    jobs: Job[] = [];

    mounted() {
        fetch('api/Job/jobs')
            .then(response => {
                    console.log(response);
                    return response.json() as Promise<Job[]>
                }
            )
            .then(data => {
                console.log();
                this.jobs = data;
            });
    }
}
