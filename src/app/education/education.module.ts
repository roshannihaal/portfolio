import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { TimelineComponent } from './timeline/timeline.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [TimelineComponent],
    imports: [CommonModule, EducationRoutingModule, SharedModule],
})
export class EducationModule {}
