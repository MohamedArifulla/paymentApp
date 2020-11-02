import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../service/payment.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  experyDate:any;
  recentPaymentList: any = [];
  paymentSubscription$: Subscription;
  constructor(private paymentService:PaymentService) { }

  ngOnInit() { }
  onSubmit(paymentValue) {
    if (paymentValue.form.status === 'INVALID') {
      window.alert('Please select all required field!');
    } else {
      if (paymentValue.value.amount > 0) {
        const dataPayload = paymentValue.value; 
        this.paymentSubscription$ = this.paymentService.postCardDetails(dataPayload)
        .subscribe((res:any)=>{
          if (res) {
            this.recentPaymentList.push(res.body);
          }        
        },(error:any)=>{
          window.alert('Sorry! something went wrong...');
          this.recentPaymentList = [];
        });
      } else {
        window.alert('Amount must be greater than 0');
      }
    }
  }
  onExpirationDate(enteredDate) {
    const today = new Date();
    const enteredDateValue = new Date(enteredDate);
    if(enteredDateValue < today) {
      window.alert('Expery date cannot be in the past');
      this.experyDate = null;
    }
  }
  ngOnDestroy() {
    this.paymentSubscription$.unsubscribe();
  }
}
