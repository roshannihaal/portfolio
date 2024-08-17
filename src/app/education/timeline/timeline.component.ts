import { Component, OnInit } from '@angular/core';
import { IEducation } from 'src/app/shared/interface';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit {
    educations: IEducation[];

    ngOnInit(): void {
        this.educations = [
            {
                name: 'Madras Institute of Technology',
                type: 'Bachelor of Technology',
                major: 'Information Technology',
                location: 'Chrompet, Chennai',
                start: '2018',
                end: '2022',
                metric: 'CGPA',
                value: '7.93',
                skills: [
                    'C',
                    'C++',
                    'Java',
                    'Python',
                    'Datastructures and Algorithms',
                    'Discrete  Mathematics',
                ],
            },
            {
                name: `St.Mary's Higher Secondary School`,
                type: 'Higher Secondary Education',
                major: 'Mathematics and Computer Science',
                location: 'Colachel, Kanniyakumari',
                start: '2017',
                end: '2018',
                metric: 'Grade',
                value: '86.58%',
                skills: [],
            },
            {
                name: 'Orient Matricualtion School',
                type: 'Secondary Education',
                major: null,
                location: 'Colachel, Kanniyakumari',
                start: '2015',
                end: '2016',
                metric: 'Grade',
                value: '91.20%',
                skills: [],
            },
        ];
    }
}
