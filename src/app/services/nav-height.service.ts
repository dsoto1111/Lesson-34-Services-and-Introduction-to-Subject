import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NavHeightService {

    public height!: string;

    heightListener: Subject<string> = new Subject<string>();

    constructor() { }

    changeHeight() {
        this.heightListener.next(this.height);
    }
}
