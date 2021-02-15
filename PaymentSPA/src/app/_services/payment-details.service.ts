import { Injectable } from '@angular/core';
import { PaymentDetails } from '../_models/payment-details.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaymentDetailsService {
  constructor(private http: HttpClient) {}
  readonly baseURL = 'https://localhost:44302/api/PaymentDetail';
  formData: PaymentDetails = new PaymentDetails();

  postPaymentDetails() {
    return this.http.post(this.baseURL, this.formData);
  }
}
