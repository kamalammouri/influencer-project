import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule,routes } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule,LocationStrategy,PathLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { DashbordInfluenceurComponent } from './components/influenceur/dashbord/dashbord.component';
import { NotFoundComponent } from './components/website/not-found/not-found.component';
import { NavbarComponent } from './components/website/home/navbar/navbar.component';
import { FooterComponent } from './components/website/home/footer/footer.component';
import { TermsComponent } from './components/website/home/terms/terms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccueilComponent } from './components/website/home/accueil/accueil.component';
import { LoginAdminComponent } from './components/admin/login/login.component';


import { FullComponent } from './components/admin/dashbord/layouts/full/full.component';
import { NavigationComponent } from './components/admin/dashbord/shared/header-navigation/navigation.component';
import { SidebarComponent } from './components/admin/dashbord/shared/sidebar/sidebar.component';
import { SpinnerComponent } from './components/admin/dashbord/shared/spinner.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResetPasswordComponent } from './components/admin/reset-password/reset-password.component';
import { RequestPasswordResetComponent } from './components/admin/request-password-reset/request-password-reset.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  declarations: [
    LoginAdminComponent,
    AppComponent,
    DashbordInfluenceurComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    TermsComponent,
    AccueilComponent,
    SpinnerComponent,
    FullComponent,
    NavigationComponent,
    SidebarComponent,
    ResetPasswordComponent,
    RequestPasswordResetComponent,
  ],
  imports: [
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CommonModule,
	  PerfectScrollbarModule,
    RouterModule.forRoot(routes, { useHash: false, relativeLinkResolution: 'legacy' }),
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: PathLocationStrategy
  },
{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
