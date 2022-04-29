import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/httpServices/http.service';
import { UserService } from 'src/app/services/userServices/user.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm!: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, private userdata:UserService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            // title: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            // validates date format yyyy-mm-dd
            
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
           
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    register() {
        this.submitted = true;
        console.log("registered successfully"+ this.registerForm.value)
        // stop here if form is valid
        if (this.registerForm.valid) {
           console.log("registered successfully")
           let data={
               firstName:this.registerForm.value.firstName,
               lastName:this.registerForm.value.lastName,
               email:this.registerForm.value.email,
               password:this.registerForm.value.password,
               service:'advance',
           }
           this.userdata.Registration(data).subscribe((response:any)=> {
               console.log(response);
           })
        }

       
        // display form values on success
       
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}