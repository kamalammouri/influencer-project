import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class InfluecneurService {

  constructor(private http: HttpClient){
  }

  login(data:any){
    return this.http.post(environment.apiUrl+'/InfluenceurAuth/login',data);
  }

  resetPassword(data:any){
    return this.http.post(environment.apiUrl+'/InfluenceurAuth/resetPasswordRaquest',data);
  }

  passwordResetProcess(data:any){
    return this.http.post(environment.apiUrl+'/InfluenceurAuth/passwordResetProcess',data);
  }
}
