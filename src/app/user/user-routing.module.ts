import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { ListUserComponent } from './list-user/list-user.component';



const routes: Routes = [
    {path:'list', component:ListUserComponent},
    {path:'add',component:AddNewUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
