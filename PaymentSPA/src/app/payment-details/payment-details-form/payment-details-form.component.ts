import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetails } from 'src/app/_models/payment-details.model';
import { PaymentDetailsService } from 'src/app/_services/payment-details.service';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styles: [
  ]
})
export class PaymentDetailsFormComponent implements OnInit {


  constructor(public service: PaymentDetailsService) { }

  ngOnInit(): void {
  }

  onSubmit( form: NgForm ) {
    this.service.postPaymentDetails().subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err.value);
      }
    );
  }

  resetForm( form: NgForm ) {
    form.form.reset();
    this.service.formData = new PaymentDetails();
  }
}
