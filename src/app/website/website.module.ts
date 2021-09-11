import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ServiceTwoComponent } from './service-two/service-two.component';
import { ServiceThreeComponent } from './service-three/service-three.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContactComponent } from './contact/contact.component';

import { MaterialModule } from '../material-module/material.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ServiceTwoComponent,
    ServiceThreeComponent,
    GallaryComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    MaterialModule
  ]
})
export class WebsiteModule { }
