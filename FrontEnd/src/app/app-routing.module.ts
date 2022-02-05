import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { DashbordInfluenceurComponent } from './components/influenceur/dashbord/dashbord.component';
import { NotFoundComponent } from './components/website/not-found/not-found.component';
import { TermsComponent } from './components/website/home/terms/terms.component';
import { AccueilComponent } from './components/website/home/accueil/accueil.component';
import { RegisterComponent } from './components/website/register/register.component';
import { LoginComponent } from './components/website/login/login.component';
import { LoginAdminComponent } from './components/admin/login/login.component';
import { FullComponent } from './components/admin/dashbord/layouts/full/full.component';
import { ResetPasswordComponent } from './components/admin/reset-password/reset-password.component';
import { RequestPasswordResetComponent } from './components/admin/request-password-reset/request-password-reset.component';



export const routes: Routes = [
  { path: 'admin',                  component: FullComponent,
    children: [
      {    path: '',                loadChildren: () => import('./components/admin/dashbord/component/component.module').then(m => m.ComponentsModule)}
    ]
  },
  { path: "admin/login",             component:LoginAdminComponent},
  { path: "admin/reset-password",    component:ResetPasswordComponent},
  { path: "admin/reset-process",     component:RequestPasswordResetComponent},
  { path:  "influenceur/dashbord",   component:DashbordInfluenceurComponent},
  { path:  "",                       component:AccueilComponent},
  { path:  "terms",                  component:TermsComponent},
  { path:  "register",               component:RegisterComponent},
  { path:  "login",                  component:LoginComponent},
  { path:  "**",                     component:NotFoundComponent},
]

const routerOptions:ExtraOptions ={
  scrollPositionRestoration:'enabled',
  anchorScrolling:'enabled'
};
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
