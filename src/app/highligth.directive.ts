import { Directive ,ElementRef, Input } from '@angular/core';
import {Quote} from './quote'

@Directive({
  selector: '[appHighligth]'
})


export class HighligthDirective {
  @Input() name:string;

  constructor(private elem:ElementRef) { 
        this.elem.nativeElement.style.backgroundColor = 'blue';
        this.elem.nativeElement.style.color = 'white';
    }

  }

