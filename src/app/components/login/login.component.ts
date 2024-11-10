import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserRegisterService } from '../../Services/user-register.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm :FormGroup
  message:string =""

  constructor(
    private fb : FormBuilder,
    private loginService : UserRegisterService,
    private toastr : ToastrService,
    private router: Router,
  ){

    this.loginForm = this.fb.group({
      Email:[''],
      password:['']
    })
  }


  onSubmit(){
    let loginUser = this.loginForm.value
    console.log(loginUser.Email);
    

    return this.loginService.loginUser(loginUser.Email,loginUser.password).subscribe({
      next:response => {
        this.toastr.success("Success")
      },
      error:error => this.toastr.error("error")
    })
  
  }
}


