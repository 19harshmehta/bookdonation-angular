import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }
  getAllCategories():Observable<any>
  {
    return this.httpClient.get("https://bookdonationapi-dkhq.onrender.com/getallcategory");
  }

  getAllItems():Observable<any>
  {
    return this.httpClient.get("https://bookdonationapi-dkhq.onrender.com/getallitems");

  }


}
