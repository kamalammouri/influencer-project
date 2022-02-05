
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, SortDirection} from '@angular/material/sort';

import { InfluenceurListService } from '../../../../../services/getInfluenceurList.service';

export interface InfluenceursList {
  id: number;
  nom: string;
  prenom: string;
  date_naissance: Date;
  telephone:number;
  instagram:string;
  influenceur_id:string;
  influenceur: Influenceur
}
export interface Influenceur {
  id: number;
  email: string;
  role:string;
}

@Component({
  selector: 'app-ngbd-tabs',
  templateUrl: './influenceursList.component.html'
})

export class InfluenceursListComponent implements OnInit{
  data: InfluenceursList;

  constructor(private influenceurListService: InfluenceurListService) {
    this.getInflu();
  }

  ngOnInit(): void {
  }

  getInflu() {
    this.influenceurListService.getData().subscribe(res => {
      console.log(res);
    });
  }

}
