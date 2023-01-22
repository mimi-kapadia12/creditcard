import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {


  @Input() control: FormControl;
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

  showError() {
    const { dirty, touched, errors } = this.control
    return dirty && touched && errors
  }

}
