import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { AllAdminUserComponent } from './all-admin-user/all-admin-user.component';
import { RemoveComponent } from './remove/remove.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'add-user',component:AddComponent},
  {path:"remove-user",component:RemoveComponent},
  {path:'update',component:UpdateComponent},
  {path:'all-admin-user',component:AllAdminUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
