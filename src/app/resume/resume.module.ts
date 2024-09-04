import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ShowComponent } from './show/show.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ShowComponent],
    imports: [CommonModule, ResumeRoutingModule, PdfViewerModule, SharedModule],
})
export class ResumeModule {}
