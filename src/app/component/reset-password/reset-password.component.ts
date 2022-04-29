import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resettPasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.resettPasswordForm = this.formBuilder.group({
         
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required],
         
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.resettPasswordForm.controls; }

  onSubmit() {
      this.submitted = true;
      console.log("Successfully registered"+this.resettPasswordForm.value)
      // stop here if form is invalid
      if (this.resettPasswordForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.resettPasswordForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.resettPasswordForm.reset();
  }
}