import { Component, OnInit } from '@angular/core';
import { IExperience } from 'src/app/shared/interface';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
    list: IExperience[];
    ngOnInit(): void {
        this.list = [
            {
                company: 'ViewZen Labs Private Limited',
                location: 'Chennai, IN',
                titles: [
                    {
                        startDate: '07-11-2022',
                        endDate: '09-27-2024',
                        name: 'Software Engineer',
                    },
                ],
            },
        ];
    }
}
