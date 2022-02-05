import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  login(data:any){
    return this.http.post(environment.apiUrl+'/AdminAuth/login',data);
  }

  resetPassword(data:any){
    return this.http.post(environment.apiUrl+'/AdminAuth/resetPasswordRaquest',data);
  }

  passwordResetProcess(data:any){
    return this.http.post(environment.apiUrl+'/AdminAuth/passwordResetProcess',data);
  }
}
