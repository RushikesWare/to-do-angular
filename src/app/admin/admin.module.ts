import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { MaterialModule } from '../material-module/material.module';
//Material Module

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AddComponent } from './add/add.component';
import { RemoveComponent } from './remove/remove.component';
import { UpdateComponent } from './update/update.component';
import { AllAdminUserComponent } from './all-admin-user/all-admin-user.component';


@NgModule({
  declarations: [
    AddComponent,
    RemoveComponent,
    UpdateComponent,
    AllAdminUserComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule ,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
