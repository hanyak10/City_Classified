import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../auth/services/storage/storage.service';

const BASIC_URL = ["http://localhost:9090"];

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  postClassified(classifiedDto: any): Observable<any>{
    return this.http.post(BASIC_URL+"/api/admin/classifieds", classifiedDto,{
      headers: this.createAuthorizationHeader()
    });
  }

  getAllClassified(): Observable<any>{
    return this.http.get(BASIC_URL+"/api/admin/classified",{
      headers: this.createAuthorizationHeader()
    })
  }

  deleteClassified(id: number):Observable<any>{
    return this.http.delete(BASIC_URL+"/api/admin/classified/"+id, {
      headers: this.createAuthorizationHeader()
    });
  }

  getClassifiedById(id: number):Observable<any>{
    return this.http.get(BASIC_URL+"/api/admin/classified/"+id, {
      headers: this.createAuthorizationHeader()
    });
  }

  updateClassified(classifiedId: number, classifiedDto: any):Observable<any>{
    return this.http.put(BASIC_URL+"/api/admin/classified/"+ classifiedId, classifiedDto,{
      headers: this.createAuthorizationHeader()
    });
  }

  createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer '+ StorageService.getToken()
    );
  }
}
