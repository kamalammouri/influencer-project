import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  handle(token:any){
    this.set(token);
  }

  set(token:any){
    return localStorage.setItem('token', token);
  }
  get(){
   return localStorage.getItem('token');
  }
  remove(){
   return localStorage.removeItem('token');
  }

  isValidAdmin(){
    const token = this.get();
    if(token){
      const payload =this.payload(token);
      if(payload){
        return (payload.iss==="http://localhost:8000/api/AdminAuth/login")?true:false;
      }
    }
    return false;
  }

  isValidInfluenceur(){
    const token = this.get();
    if(token){
      const payload =this.payload(token);
      if(payload){
        return (payload.iss==="http://localhost:8000/api/InfluenceurAuth/login")?true:false;
      }
    }
    return false;
  }

  payload(token:any){
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload:any){
    return JSON.parse(atob(payload));
  }

  loggedInAdmin(){
    return this.isValidAdmin();
  }
  loggedInInfluenceur(){
    return this.isValidInfluenceur();
  }
}
