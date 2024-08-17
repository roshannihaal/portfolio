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
                route: '/skills',
            },
            {
                label: 'Projects',
                icon: faProjectDiagram,
                route: '/skills',
            },
            {
                label: 'Experience',
                icon: faLinesLeaning,
                route: '/skills',
            },
            {
                label: 'Education',
                icon: faGraduationCap,
                route: '/skills',
            },
            {
                label: 'Resume',
                icon: faSheetPlastic,
                route: '/skills',
            },
        ];
    }
}
