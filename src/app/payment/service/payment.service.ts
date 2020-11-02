import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }
  postCardDetails(data) {
    return this.http.post(this.url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
  }
}
