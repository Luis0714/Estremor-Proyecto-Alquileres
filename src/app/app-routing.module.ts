import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/shared/components/not-found/not-found.component';
import { PreloadComponententService } from './services/preload-componentent.service';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'website',
    // canActivate:[AuthGuard],
    loadChildren: () => import('./modules/website/website.module').then(m => m.WebsiteModule),
    data:{
      preload:true,
    },
  },
  {
    path: 'cms',
    // canActivate:[AuthGuard],
    loadChildren: () => import('./modules/cms/cms.module').then(m => m.CmsModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadComponententService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
