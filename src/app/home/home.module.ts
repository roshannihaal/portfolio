import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent } from './about/about.component';

@NgModule({
    declarations: [AboutComponent],
    imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
