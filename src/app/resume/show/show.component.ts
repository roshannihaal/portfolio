import { Component } from '@angular/core';

@Component({
    selector: 'app-show',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.css'],
})
export class ShowComponent {
    onDownload() {
        const link = document.createElement('a');
        link.download = 'Roshan_Resume.pdf';
        link.href = '../assets/resume/resume.pdf';
        link.click();
    }
}
