import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[buttonDisabled]',
})
export class ButtonDisableDirective {
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
    this.checkbox = this.renderer2.createElement('input');
    this.renderer2.setAttribute(this.checkbox, 'type', 'checkbox');
    this.renderer2.listen(this.checkbox, 'click', this.onClickBox.bind(this));
    this.renderer2.appendChild(elementRef.nativeElement, this.checkbox);
  }
  condition = false;
  checkbox: Node;
  @HostBinding('disabled')
  get disabled(): string {
    return !this.condition ? 'disabled' : null;
  }

  onClickBox(): void {
    this.condition = !this.condition;
  }
}
