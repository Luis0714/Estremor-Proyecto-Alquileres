import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/authenticate/login/login.component';
import { HomeComponent } from './components/master-page/home/home.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'**',
    component: NotFoundComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
