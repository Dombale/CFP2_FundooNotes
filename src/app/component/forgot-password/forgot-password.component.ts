import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userServices/user.service';
@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent implements OnInit {
    forgotPasswordForm!: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, private userdata: UserService) { }

    ngOnInit() {
        this.forgotPasswordForm = this.formBuilder.group({

            email: ['', [Validators.required, Validators.email]],


        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.forgotPasswordForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.forgotPasswordForm.valid) {
            console.log("forgetpassward successfull");
            let data = {

                email: this.forgotPasswordForm.value.email,
            }
            this.userdata.Forgetpassward(data).subscribe((response: any) => {
                console.log(response);

            })
        }


    }

    onReset() {
        this.submitted = false;
        this.forgotPasswordForm.reset();
    }
}