import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userServices/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userdata: UserService, private router:Router ) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      service:"advance"
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onsubmit() {
    this.submitted = true;
    // stop here if form is valid
    if (this.loginForm.valid){
      let data = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        service:"advance"
      }
      this.userdata.Login(data).subscribe((response: any) => {
        console.log('login successfull', response);
       localStorage.setItem("token",response.id)
       this.router.navigateByUrl('/home')
      },(error)=>{console.log(error)})
    }


  }

  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }
}