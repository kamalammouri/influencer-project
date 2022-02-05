import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { SortDirection } from "@angular/material/sort";
import { environment } from '../../environments/environment'
import { InfluenceursList } from '../components/admin/dashbord/component/influenceursList/influenceursList.component';
@Injectable({
  providedIn: 'root'
})
export class InfluenceurListService {
  constructor(private httpClient: HttpClient){
  }

  getData(): Observable<InfluenceursList> {
    return this.httpClient.get<InfluenceursList>(environment.apiUrl+'/AdminAuth/getAllInfluenceur');
  }
}
