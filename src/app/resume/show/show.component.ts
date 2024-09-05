import {
    AfterViewInit,
    Component,
    ElementRef,
    HostListener,
    OnInit,
    ViewChild,
} from '@angular/core';
import { saveAs } from 'file-saver';
import { PDFProgressData } from 'ng2-pdf-viewer';

@Component({
    selector: 'app-show',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.css'],
})
export class ShowComponent implements AfterViewInit, OnInit {
    @ViewChild('resumeWrap') resumeWrap: ElementRef;

    currPDFWidth: string;

    loadedPDF: boolean;

    loadingProgress: number;

    ngOnInit(): void {
        this.loadingProgress = 4;
    }
    ngAfterViewInit(): void {
        this.setPDFWidth();
    }

    @HostListener('window:resize')
    detectResize() {
        this.setPDFWidth();
    }

    setPDFWidth() {
        const width = this.resumeWrap.nativeElement.offsetWidth;
        if (width > 768) {
            this.currPDFWidth = '820px';
        } else if (width > 425) {
            this.currPDFWidth = '460px';
        } else if (width > 375) {
            this.currPDFWidth = '400px';
        } else if (width > 320) {
            this.currPDFWidth = '350px';
        } else {
            this.currPDFWidth = '300px';
        }
    }

    afterLoad() {
        setTimeout(() => {
            this.loadedPDF = true;
        }, 1000);
    }

    onProgress(data: PDFProgressData) {
        this.loadingProgress = Math.floor((data.loaded / data.total) * 100);
    }

    onDownload() {
        const resumePath = '../assets/resume/ROSHAN_RESUME.pdf';
        const resumeName = 'ROSHAN_RESUME.pdf';
        saveAs(resumePath, resumeName);
    }
}
