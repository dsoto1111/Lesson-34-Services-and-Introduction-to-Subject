import { Component, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { NavHeightService } from '../services/nav-height.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
    clickDropDownButton: boolean = false;

    @ViewChild('nav') nav!: ElementRef;

    constructor(private navHeightSvc: NavHeightService) {}

    ngAfterViewInit(): void {
            this.navHeightSvc.height = this.nav.nativeElement.offsetHeight;
            this.navHeightSvc.changeHeight();
    }

    @HostListener('window:resize') resize() {
        setTimeout(() => {
            this.navHeightSvc.height = this.nav.nativeElement.offsetHeight;
            this.navHeightSvc.changeHeight();     
        }, 0);
    }
}
