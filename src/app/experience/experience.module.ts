import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { OrderComponent } from './order/order.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [OrderComponent],
    imports: [CommonModule, ExperienceRoutingModule, SharedModule],
})
export class ExperienceModule {}
