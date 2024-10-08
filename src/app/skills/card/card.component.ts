import { Component, Input } from '@angular/core';
import { ISkills } from 'src/app/shared/interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() skill: ISkills;
}
