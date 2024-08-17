import { Component, OnInit } from '@angular/core';
import { ISkills, ISocialMedia } from 'src/app/shared/interface';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
    skills: ISkills[];
    socialMedia: ISocialMedia[];

    ngOnInit(): void {
        this.skills = [
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

        this.socialMedia = [
            {
                name: 'GitHub',
                image: '../assets/images/github.png',
                url: 'https://github.com/roshannihaal',
            },
            {
                name: 'LinkedIn',
                image: '../assets/images/linkedin.png',
                url: 'https://www.linkedin.com/in/roshan-nihaal-0196571b6',
            },
            {
                name: 'LeetCode',
                image: '../assets/images/leetcode.png',
                url: 'https://leetcode.com/roshan_nihaal',
            },
        ];
    }

    onVisitMedia(media: ISocialMedia): void {
        window.open(media.url, '_blank');
    }
}
