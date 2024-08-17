import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, FontAwesomeModule],
    exports: [HeaderComponent, CarouselModule],
})
export class SharedModule {}
