import { Routes } from '@angular/router';

import { NgbdpregressbarBasicComponent } from './progressbar/progressbar.component';
import { NgbdratingBasicComponent } from './rating/rating.component';
import { InfluenceursListComponent } from './influenceursList/influenceursList.component';
import { HomeComponent } from './home/home.component';

export const ComponentsRoutes:  Routes = [
	{
		path: '',
		children: [
      { path: 'home',                 component: HomeComponent                },
			{ path: 'progressbar',          component: NgbdpregressbarBasicComponent},
			{ path: 'rating',               component: NgbdratingBasicComponent     },
			{	path: 'list', 	  component: InfluenceursListComponent       },
		]
	}
];
