import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
})
export class AboutComponent {
    skills = [
        { name: 'Typescript', image: '../assets/images/typescript.png' },
        { name: 'Javascript', image: '../assets/images/javascript.png' },
        { name: 'Nodejs', image: '../assets/images/nodejs.png' },
        { name: 'Angular', image: '../assets/images/angular.png' },
        { name: 'Redis', image: '../assets/images/redis.png' },
        { name: 'Docker', image: '../assets/images/docker.png' },
        { name: 'MongoDB', image: '../assets/images/mongodb.png' },
        { name: 'PostgreSQL', image: '../assets/images/postgresql.png' },
        { name: 'Apache Kafka', image: '../assets/images/kafka.png' },
        { name: 'HTML', image: '../assets/images/html.png' },
        { name: 'CSS', image: '../assets/images/css.png' },
        { name: 'SASS', image: '../assets/images/sass.png' },
    ];
}
