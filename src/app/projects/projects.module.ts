import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ListComponent],
    imports: [CommonModule, ProjectsRoutingModule, SharedModule],
})
export class ProjectsModule {}
