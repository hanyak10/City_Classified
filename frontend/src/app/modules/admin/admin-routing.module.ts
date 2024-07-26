import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PostClassifiedComponent } from './components/post-classified/post-classified.component';
import { UpdateClassifiedComponent } from './components/update-classified/update-classified.component';

const routes: Routes = [
  {path:"dashboard", component:AdminDashboardComponent},
  {path:"classified", component:PostClassifiedComponent},
  {path:"classified/:id", component:UpdateClassifiedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
