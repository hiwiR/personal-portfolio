import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactMessage } from '../interface/contact-message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apigURL = "https://08hxho0ddl.execute-api.us-west-2.amazonaws.com/dev/contact"
  
  constructor(private httpClient: HttpClient) { }

  postMessage(contactMsg: ContactMessage): Observable<any>{
   
          const params = contactMsg;
          return this.httpClient.post(this.apigURL,contactMsg);
     
    }
  }
