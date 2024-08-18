import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { TechnologyComponent } from './technology/technology.component';
import { CardComponent } from './card/card.component';

@NgModule({
    declarations: [TechnologyComponent, CardComponent],
    imports: [CommonModule, SkillsRoutingModule],
})
export class SkillsModule {}
