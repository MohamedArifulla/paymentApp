import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentRoutingModule } from './payment-routing.module';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CardDetailsComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    MatButtonModule,
    FormsModule,                               
    ReactiveFormsModule,
    HttpClientModule                        
  ]
})
export class PaymentModule { }
