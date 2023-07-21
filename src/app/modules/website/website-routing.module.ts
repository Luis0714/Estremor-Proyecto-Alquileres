import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuDesktopComponent } from './components/menu-desktop/menu-desktop.component';

const routes: Routes = [
  {
   
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: MenuDesktopComponent
      }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
