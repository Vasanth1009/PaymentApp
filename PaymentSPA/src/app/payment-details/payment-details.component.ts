import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetails } from '../_models/payment-details.model';
import { PaymentDetailsService } from '../_services/payment-details.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [],
})
export class PaymentDetailsComponent implements OnInit {
  constructor(
    public service: PaymentDetailsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.service.refreshList();
  }

  editRecord(record: PaymentDetails) {
    this.service.formData = Object.assign({}, record);
  }

  deleteRecord(id: number) {
    if (confirm('Are you sure to delete this Record?')) {
      this.service.deletePaymentDetails(id).subscribe(
        (res) => {
          this.service.refreshList();
          this.toastr.error('Deleted Successfully', 'Payment Detail Register');
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
