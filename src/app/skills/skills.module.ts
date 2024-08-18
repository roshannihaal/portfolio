import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { TechnologyComponent } from './technology/technology.component';

@NgModule({
    declarations: [TechnologyComponent],
    imports: [CommonModule, SkillsRoutingModule],
})
export class SkillsModule {}
