import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../services/admin.service';
import { TokenService } from '../../../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginAdminComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;
  data: any ;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private toastr:ToastrService,
    private tokenService: TokenService,
    private router: Router,
    ) { }

  public error:any=null;

  ngOnInit(): void {

   if (this.tokenService.loggedIn()) {
      this.router.navigate(['/admin']);
    }

    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.adminService.login(this.form.value).subscribe(
      res => this.handleResponse(res),
      error => this.handleError(error)
      );
       //console.log(JSON.stringify(this.form.value, null, 2));
  }
  handleError(error: any) {
    this.error = error.error.error;
  }
  handleResponse(data: any) {
    console.log(data.access_token);
    if(data.access_token){
      this.tokenService.handle(data.access_token);
      this.router.navigateByUrl('admin/home');
    }
  }

}

