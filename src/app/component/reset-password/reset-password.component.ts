import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userServices/user.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resettPasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userdata: UserService) { }

  ngOnInit() {
      this.resettPasswordForm = this.formBuilder.group({
         
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required],
         
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.resettPasswordForm.controls; }

  onSubmit() {
    console.log("reset success",this.resettPasswordForm.value)
    // console.log(this.token);
    if (this.resettPasswordForm.valid) {
        // console.log("reset success");
        let data={
         newPassword:this.resettPasswordForm.value.password,
         confirmPassword:this.resettPasswordForm.value.confirmPassword,
        }
        this.userdata.Reset(data).subscribe((response:any)=> {
            console.log("Passward change successfully",response);
            
        })
        
    }
      
  }

  onReset() {
      this.submitted = false;
      this.resettPasswordForm.reset();
  }
}