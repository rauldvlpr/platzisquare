import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector : 'li[contar-clicks]'
})

export class ContarCliksDirective{

    clinN:number = 0;

    @HostBinding('style.opacity') opacity:number = .1;
    @HostListener('click', ['$event.target']) onClick(btn){
        console.log('li', btn, "Número de clicks: " , this.clinN++);
        this.opacity += .1;
    }
    
}