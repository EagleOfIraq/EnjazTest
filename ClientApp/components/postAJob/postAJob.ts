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
    companyId: string;
    fullTime: any;
    jobTitle: string;
    jobDescription: string='';
    requestHeaders: any;

    mounted() {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJuYmYiOjE1NTA2NjU3MzksImV4cCI6MTU1MTI3MDUzOSwiaWF0IjoxNTUwNjY1NzM5fQ.89RwgNmV6xbOl80IGg59OQhRKPyU0pji1zkrdutnqlE');
        let token = localStorage.getItem('token');
        this.requestHeaders = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        };

        fetch('api/Company/companies', {
            headers: this.requestHeaders,
            method: 'GET',
            // body: ''
        })
            .then(response => {
                    return response.json() as Promise<Company[]>
                }
            )
            .then(data => {
                this.companies = data;
            });
    }

    add() {
        let company: Company;
        company = this.companies.filter(company => company.name == this.companyId)[0];
        if (company) alert(company.id + " " + this.fullTime)
        else alert(0 + " " + this.fullTime)

        fetch('api/Job/add', {
            headers: this.requestHeaders,
            method: 'POST',
            body: JSON.stringify({
                'title': this.jobTitle,
                'description': this.jobDescription,
                'fullTime': this.fullTime ? 1 : 0,
                'companyid': company.id,
                'createdAt': new Date().getTime()
            })
        })
            .then(response => response.json() as Promise<Job>)
            .catch(reason => console.log(reason))
            .then(data => {
                console.log(JSON.stringify(data))
            });
    }
}
