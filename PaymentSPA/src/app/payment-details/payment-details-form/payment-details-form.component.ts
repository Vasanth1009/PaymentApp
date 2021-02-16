import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetails } from 'src/app/_models/payment-details.model';
import { PaymentDetailsService } from 'src/app/_services/payment-details.service';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styles: [],
})
export class PaymentDetailsFormComponent implements OnInit {
  constructor(
    public service: PaymentDetailsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (this.service.formData.paymentDetailsId == 0) {
      this.insertForm(form);
    } else {
      this.updateFrom(form);
    }
  }

  insertForm(form: NgForm) {
    this.service.postPaymentDetails().subscribe(
      (res) => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted Successfully', 'Payment Detail Register');
      },
      (err) => {
        console.log(err.value);
      }
    );
  }

  updateFrom(form: NgForm) {
    this.service.putPaymentDetails().subscribe(
      (res) => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated Successfully', 'Payment Detail Register');
      },
      (err) => {
        console.log(err.value);
      }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new PaymentDetails();
  }
}
