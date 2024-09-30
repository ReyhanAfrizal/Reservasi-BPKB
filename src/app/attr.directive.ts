import { Directive, ElementRef, Input, OnInit } from '@angular/core';

interface IDirective {
  color: string;
  isDone: boolean;
}

class Director implements IDirective {
  color: string = '';
  isDone: boolean = false;
}

@Directive({
  selector: '[appAttr]',
})
export class AttrDirective implements OnInit {
  @Input() appAttr: IDirective = new Director();

  constructor(private elemenRef: ElementRef) {}

  ngOnInit(): void {
    if (this.appAttr.isDone) {
      this.elemenRef.nativeElement.classList.add('table-success');
    } else {
      this.elemenRef.nativeElement.classList.add('table-danger');
    }
    this.elemenRef.nativeElement.classList.add(this.appAttr.color);
  }
}
