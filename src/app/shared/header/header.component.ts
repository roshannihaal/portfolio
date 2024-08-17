import { Component, OnInit } from '@angular/core';
import {
    faCode,
    faGraduationCap,
    faLinesLeaning,
    faSheetPlastic,
    faProjectDiagram,
    faTerminal,
} from '@fortawesome/free-solid-svg-icons';
import { IHeaderElement } from '../interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    details: IHeaderElement;

    modules: IHeaderElement[];

    ngOnInit(): void {
        this.details = {
            label: 'Roshan Nihaal Jahangeer',
            icon: faCode,
            route: '',
        };
        this.modules = [
            {
                label: 'Skills',
                icon: faTerminal,
                route: '/',
            },
            {
                label: 'Projects',
                icon: faProjectDiagram,
                route: '/',
            },
            {
                label: 'Experience',
                icon: faLinesLeaning,
                route: '/',
            },
            {
                label: 'Education',
                icon: faGraduationCap,
                route: '/',
            },
            {
                label: 'Resume',
                icon: faSheetPlastic,
                route: '/',
            },
        ];
    }
}
