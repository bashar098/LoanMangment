import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { LoanComponent } from './loan/loan.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThemeProvider } from "@material-ui/styles";

@NgModule({
  declarations: [
    CustomerComponent,
    LoanComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MatSliderModule
    
  ],
  exports:[
    MatSliderModule
  ]
})
export class ModulesModule { }
