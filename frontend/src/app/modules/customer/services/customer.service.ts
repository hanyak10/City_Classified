import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../auth/services/storage/storage.service';

const BASIC_URL= ["http://localhost:9090"]

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : HttpClient) { }

  getAllClassified(): Observable<any>{
    return this.http.get(BASIC_URL+"/api/customer/classified",{
      headers: this.createAuthorizationHeader()
    })
  }
  getClassifiedById(classifiedId: number): Observable<any>{
    return this.http.get(BASIC_URL+"/api/customer/classified/"+classifiedId,{
      headers: this.createAuthorizationHeader()
    })
  }

  bookClassified(bookClassifiedDto: any): Observable<any>{
    return this.http.post(BASIC_URL+"/api/customer/classified/book/"+bookClassifiedDto,{
      headers: this.createAuthorizationHeader()
    })
  }
  
  createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer '+ StorageService.getToken()
    );
  }
}
