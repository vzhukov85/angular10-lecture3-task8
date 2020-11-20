import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[buttonDisabled]',
})
export class ButtonDisableDirective implements OnInit {
  @Input() checked = true;
  checkbox: Node;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
    this.checkbox = this.renderer2.createElement('input');
    this.renderer2.setAttribute(this.checkbox, 'type', 'checkbox');
    this.renderer2.listen(this.checkbox, 'click', this.onClickBox.bind(this));
    this.renderer2.appendChild(elementRef.nativeElement, this.checkbox);
  }

  ngOnInit(): void {
    if (this.checked) {
      this.renderer2.setAttribute(this.checkbox, 'checked', 'checked');
    }
  }

  @HostBinding('disabled')
  get disabled(): string {
    return !this.checked ? 'disabled' : null;
  }

  onClickBox(): void {
    this.checked = !this.checked;
  }
}
