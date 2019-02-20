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
    jobTitle: string;
    jobDescription: string;
    title: string;
    description: string;
    requestHeaders: any;

    mounted() {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJuYmYiOjE1NTA2NjU3MzksImV4cCI6MTU1MTI3MDUzOSwiaWF0IjoxNTUwNjY1NzM5fQ.89RwgNmV6xbOl80IGg59OQhRKPyU0pji1zkrdutnqlE');
        let token = localStorage.getItem('token');
        this.requestHeaders = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        };

        fetch('api/Job/jobs', {
            headers: this.requestHeaders,
            method: 'GET',
            // body: ''
        })
            .then(response => {
                    return response.json() as Promise<Job[]>
                }
            )
            .then(data => {
                this.jobs = data;
            });
    }

    search() {
        fetch('api/Job/search?title=' + this.description + "&description=" + this.description, {
            headers: this.requestHeaders,
            method: 'GET',
            // body: ''
        })
            .then(response => {
                    return response.json() as Promise<Job[]>
                }
            )
            .then(data => {
                this.jobs = data;
            });
    }

    add() {
        fetch('api/Job/add', {
            headers: this.requestHeaders,
            method: 'POST',
            body: JSON.stringify({
                'title': this.jobTitle,
                'description': this.jobDescription
            })
        })
            .then(response => {
                    return response.json() as Promise<Job>
                }
            )
            .then(data => {
                console.log(JSON.stringify(data))
            });
    }
}
