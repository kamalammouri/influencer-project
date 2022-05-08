import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InfluecneurService } from 'src/app/services/influenceur.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginInfluenceurComponent implements OnInit {


  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;
  data: any ;

  public errors:any=null;
  public successMsg:any=null;

  constructor(
    private formBuilder: FormBuilder,
    private influecneurService: InfluecneurService,
    private toastr:ToastrService,
    private tokenService: TokenService,
    private router: Router,
    ) { }



  ngOnInit(): void {

   if (this.tokenService.loggedInAdmin()) {
      this.router.navigate(['/influenceur']);
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
    this.errors=null;
    this.successMsg=null;

    if (this.form.invalid) {
      return;
    }
    this.influecneurService.login(this.form.value).subscribe(
      (result) => {
        this.successMsg = result;
        this.toastr.success(this.successMsg.message);
        setTimeout(() => {this.router.navigateByUrl("home")}, 2000);
      },
      (error) => {
        this.errors = error.error.message;
        this.toastr.error(this.errors);
      }
      );
       //console.log(JSON.stringify(this.form.value, null, 2));
  }


}



