import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  getAllUsers():Observable<any>
  {
    return this.httpClient.get("https://bookdonationapi-dkhq.onrender.com/getallusers");
  }

  getAllDonation():Observable<any>
  {
    return this.httpClient.get("https://bookdonationapi-dkhq.onrender.com/getalldonation");
  }


}
