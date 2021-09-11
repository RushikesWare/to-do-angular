import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Test1Component } from './test1/test1.component';

import { HomeComponent } from './website/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'test1-component', component:Test1Component},

  {path:'home', component:HomeComponent},

  // {path:'**', component:PageNotFoundComponent},

  {
    path:'website',
   loadChildren: ()=> import('./website/website.module').then(website => website.WebsiteModule)
},
{
  path:"admin",
  loadChildren:()=>import('./admin/admin.module').then(admin =>admin.AdminModule)
},
{
  path:'user', loadChildren:()=>  import('./user/user.module').then(user => user.UserModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
