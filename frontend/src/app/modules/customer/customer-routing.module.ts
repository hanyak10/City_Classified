import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { BookClassifiedComponent } from './components/book-classified/book-classified.component';

const routes: Routes = [
  {path:"dashboard", component:CustomerDashboardComponent},
  {path:"book/:id", component:BookClassifiedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
