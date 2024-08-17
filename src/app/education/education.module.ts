import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
    declarations: [TimelineComponent],
    imports: [CommonModule, EducationRoutingModule],
})
export class EducationModule {}
