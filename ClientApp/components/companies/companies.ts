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
    companies: Company[] = [];
    name: string;
    location: string;
    requestHeaders: any;

    mounted() {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJuYmYiOjE1NTA2NjU3MzksImV4cCI6MTU1MTI3MDUzOSwiaWF0IjoxNTUwNjY1NzM5fQ.89RwgNmV6xbOl80IGg59OQhRKPyU0pji1zkrdutnqlE');
        let token = localStorage.getItem('token');
        this.requestHeaders = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        };

        fetch('api/company/companies', {
            headers: this.requestHeaders,
            method: 'GET',
            // body: ''
        })
            .then(response => {
                    return response.json() as Promise<Company[]>
                }
            )
            .then(data => {
                this.companies = data
            });
    }

    add() {
        fetch('api/company/add', {
            headers: this.requestHeaders,
            method: 'POST',
            body: JSON.stringify({
                'name': this.name,
                'location': this.location
            })
        })
            .then(response => response.json() as Promise<Company>)
            .catch(reason => console.log(reason))
            .then(data => {
                console.log(JSON.stringify(data))
            });
    }

}
