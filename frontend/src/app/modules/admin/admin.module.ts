import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PostClassifiedComponent } from './components/post-classified/post-classified.component';
import { NgZorroImportsModule } from '../../NgZorroImportsModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateClassifiedComponent } from './components/update-classified/update-classified.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    PostClassifiedComponent,
    UpdateClassifiedComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgZorroImportsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
