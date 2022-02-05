import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-request-password-reset',
  templateUrl: './request-password-reset.component.html',
  styleUrls: ['./request-password-reset.component.css']
})
export class RequestPasswordResetComponent implements OnInit {

  changePasswordForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    password_confirmation: new FormControl(''),
    passwordToken:  new FormControl('')
  });

  email:string;
  submitted = false;
  data: any ;
  public errors:any=null;
  public successMsg:any=null;
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private toastr:ToastrService,
    private tokenService: TokenService,
    public router: Router,
    private activeRoute: ActivatedRoute,
    ) {

      if (this.tokenService.loggedIn()) {
        this.router.navigate(['/admin']);
      }

      this.changePasswordForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
          password_confirmation: ['', [Validators.required]],
          passwordToken: ['', [Validators.required]]
        });

      this.activeRoute.queryParams.subscribe((params) => {
        this.changePasswordForm.controls['passwordToken'].setValue(params['token']);
        this.changePasswordForm.controls['email'].setValue(params['email']);
        //this.changePasswordForm.controls['email'].disable();
        this.email=params['email'];
      })

    }


  ngOnInit(): void { }

  get f(): { [key: string]: AbstractControl } {
    return this.changePasswordForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.changePasswordForm.invalid) {
      console.log("form is invalid");
      return;
    }

    this.adminService.passwordResetProcess(this.changePasswordForm.value).subscribe(
      (result) => {
        this.successMsg = result;
        setTimeout(() => {this.router.navigateByUrl("admin/login")}, 2000);
      },
      (error) => {
        this.errors = error.error.message;
      }
    );

  }

}
