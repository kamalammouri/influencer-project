import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';
import { NgbdpregressbarBasicComponent } from './progressbar/progressbar.component';
import { NgbdratingBasicComponent } from './rating/rating.component';
import { InfluenceursListComponent } from './influenceursList/influenceursList.component';
import { HomeComponent } from './home/home.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  imports: [
    MatTableModule,
    MatSortModule,
    MatCardModule,
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    NgbdpregressbarBasicComponent,
    NgbdratingBasicComponent,
    InfluenceursListComponent,
    HomeComponent,
  ]
})
export class ComponentsModule {}
