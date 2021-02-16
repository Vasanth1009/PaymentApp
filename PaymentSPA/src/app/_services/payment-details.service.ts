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
  list: PaymentDetails[];

  postPaymentDetails() {
    return this.http.post(this.baseURL, this.formData);
  }

  putPaymentDetails() {
    return this.http.put(
      `${this.baseURL}/${this.formData.paymentDetailsId}`,
      this.formData
    );
  }

  deletePaymentDetails(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  
  refreshList() {
    this.http
      .get(this.baseURL)
      .toPromise()
      .then((res) => (this.list = res as PaymentDetails[]));
  }
}
