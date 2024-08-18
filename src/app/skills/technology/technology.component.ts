import { Component, OnInit } from '@angular/core';
import { ISkills } from 'src/app/shared/interface';

@Component({
    selector: 'app-technology',
    templateUrl: './technology.component.html',
    styleUrls: ['./technology.component.css'],
})
export class TechnologyComponent implements OnInit {
    programmingLanguages: ISkills[];
    databases: ISkills[];
    markupAndStyles: ISkills[];
    devops: ISkills[];
    frameworks: ISkills[];
    backendTechnologies: ISkills[];

    ngOnInit(): void {
        this.programmingLanguages = [
            { name: 'Typescript', image: '../assets/images/typescript.png' },
            { name: 'Javascript', image: '../assets/images/javascript.png' },
            { name: 'Python', image: '../assets/images/python.png' },
        ];
        this.databases = [
            { name: 'Redis', image: '../assets/images/redis.png' },
            { name: 'MongoDB', image: '../assets/images/mongodb.png' },
            { name: 'PostgreSQL', image: '../assets/images/postgresql.png' },
        ];
        this.markupAndStyles = [
            { name: 'HTML', image: '../assets/images/html.png' },
            { name: 'CSS', image: '../assets/images/css.png' },
            { name: 'SASS', image: '../assets/images/sass.png' },
        ];
        this.devops = [{ name: 'Docker', image: '../assets/images/docker.png' }];
        this.frameworks = [{ name: 'Angular', image: '../assets/images/angular.png' }];
        this.backendTechnologies = [
            { name: 'Nodejs', image: '../assets/images/nodejs.png' },
            { name: 'Apache Kafka', image: '../assets/images/kafka.png' },
        ];
    }
}
