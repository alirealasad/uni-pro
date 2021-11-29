import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgeService } from "../age.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  ageRanges:String[];

  constructor(private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit() {
    let ages = new AgeService();
    this.ageRanges = ages.getages()

      this.registerForm = this.formBuilder.group({
          file: ['', Validators.required],
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          phone: ['', [Validators.required]],
          company: ['', Validators.required],
          linkedIn: ['', Validators.required],
          github: ['', Validators.required],
          portfolio: ['', Validators.required],
          other: [''],
          info:[''],
          age:['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.router.navigate(['/confirmed'])





      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }

}
