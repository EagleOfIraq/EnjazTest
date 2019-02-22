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
    job: Job=new class implements Job {
        company: Company= new class implements Company {
            id: number=0;
            jobs: Job[]=[];
            location: string='';
            logoUrl: string='';
            name: string='';
            url: string='';
        };
        createdAt: string='';
        description: string='';
        howToApply: string='';
        id: number=0;
        title: string='';
        type: string='';
        url: string='';
    };
    jobId: string;
    requestHeaders: any;

    mounted() {
        // alert(this.$route.params.jobId);
        this.jobId = this.$route.params.jobId;
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJuYmYiOjE1NTA2NjU3MzksImV4cCI6MTU1MTI3MDUzOSwiaWF0IjoxNTUwNjY1NzM5fQ.89RwgNmV6xbOl80IGg59OQhRKPyU0pji1zkrdutnqlE');
        let token = localStorage.getItem('token');
        this.requestHeaders = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        };

        fetch('api/Job/job?jobId=' + this.jobId, {
            headers: this.requestHeaders,
            method: 'GET',
            // body: ''
        })
            .then(response => {
                    return response.json() as Promise<Job>
                }
            )
            .then(data => {
                this.job = data
            });
    }

}
