import { Injectable, Inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private apiUrl = environment.apiUrl + '/api';

  constructor(
    @Inject(HttpClient)
    private http: HttpClient
  ) { }

  getStore(): Observable<any> {
    return this.http.get(this.apiUrl + '/get-store');
  }

  getStoreSummary(): Observable<any> {
    return this.http.get(this.apiUrl + '/get-store-summary');
  }

  getOrder(): Observable<any> {
    return this.http.get(this.apiUrl + '/get-order');
  }

  cancelOrder(data: any): Observable<any> {
    if (data) {
      return this.http.post(this.apiUrl + '/cancel-order', data);
    } else {
      return new Observable((observer: Observer<any>) => observer.error('Invalid Information'));
    }
  }
}
