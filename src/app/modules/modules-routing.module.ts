import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { LoanComponent } from './loan/loan.component';

const routes: Routes = [
  {
    path:'*',
    component:CustomerComponent
  },
  {
    path:'customer',
    component:CustomerComponent
  },
  {
    path:'loan',
    component:LoanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
