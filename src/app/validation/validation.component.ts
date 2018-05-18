import { Component, OnInit } from '@angular/core';
import { ValidationService } from './services/validation.service';
import { Validation } from '../models';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  validations: Validation[] = [];

  constructor(private validationService: ValidationService) { }

  ngOnInit() {
    this.validationService.getValidations().subscribe(data => {
      this.validations = data;
    }, error => console.log(error));
  }

  commitTransaction() {

  }

}
