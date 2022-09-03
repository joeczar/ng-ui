import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: ` <button [disabled]="disabled">{{ text }}</button> `,
  styles: [],
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() disabled: boolean = false;
}
