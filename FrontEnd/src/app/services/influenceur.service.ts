import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { SortDirection } from "@angular/material/sort";
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class InfluecneurService {

  constructor(private httpClient: HttpClient){
  }
}
