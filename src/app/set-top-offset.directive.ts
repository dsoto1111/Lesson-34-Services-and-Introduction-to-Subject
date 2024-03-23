import { Directive, HostBinding, ElementRef } from '@angular/core';
import { NavHeightService } from './services/nav-height.service';

@Directive({
    selector: '[appSetTopOffset]'
})
export class SetTopOffsetDirective {

    constructor(private el: ElementRef, private navHeightSvc: NavHeightService) { 
        this.position = 'relative';
        this.navHeightSvc.heightListener.subscribe((value: string) => {
            setTimeout(() => {
                this.top = value + "px";
            });
        });
    }

    @HostBinding('style.top') top!: string;
    @HostBinding('style.position') position!: string;
}
