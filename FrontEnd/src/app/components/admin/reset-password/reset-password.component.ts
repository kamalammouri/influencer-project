import { Component, OnInit } from '@angular/core';
import {  AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'admin-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
  });


  errors:any=null;
  successMsg:any=null;
  submitted = false;
  data: any ;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private toastr:ToastrService,
    private tokenService: TokenService,
    private router: Router,
    ) {
      if (this.tokenService.loggedIn()) {
        this.router.navigate(['/admin']);
      }

      this.form = this.formBuilder.group(
        {
          email: ['', [Validators.required, Validators.email]],
        }
      );
    }


  ngOnInit(): void {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.errors=null;
    this.successMsg=null;
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.adminService.resetPassword(this.form.value).subscribe(
      (result) => {
        this.successMsg = result;
      },
      (error) => {
        this.errors = error.error.message;
      });
  }


}
