import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field-text',
  templateUrl: './form-field-text.component.html',
  styleUrls: ['./form-field-text.component.scss']
})
export class FormFieldTextComponent implements OnInit {

@Input() label: string;
@Input() name: FormControl;
  constructor() { }

  ngOnInit(): void {
  }

}
