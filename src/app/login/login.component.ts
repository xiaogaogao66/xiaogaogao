import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  result: any = {};
  user: User = {
    id:0,
    name: "",
    password: ""
    }


  submitForm(): void {
    for (const i in this.validateForm.controls) {
    this.validateForm.controls[i].markAsDirty();
    this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
        this.loginService.login(this.user).subscribe(res => { this.result = res
            if (this.result.result == "Y") {
                  this.router.navigateByUrl("index");
            } else if (this.result.result == "N") {
                   alert("登录失败！");
          }
      });
    }
    }
    constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router){}
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }
}
