import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-error',
  templateUrl: './message-error.component.html',
  styleUrls: ['./message-error.component.css']
})
export class MessageErrorComponent {

  @Input() control: FormControl;
  @Input() message: string;
  @Input() error: string;

  hasError() {
    return this.control.hasError(this.error) && this.control.dirty;
  }
}
