import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'primeng/carousel';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, FontAwesomeModule, MenuModule, ButtonModule],
    exports: [HeaderComponent, CarouselModule, TimelineModule, CardModule, ChipModule],
})
export class SharedModule {}
