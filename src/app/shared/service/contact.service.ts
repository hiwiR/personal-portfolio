import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactMessage } from '../interface/contact-message';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apigURL = "https://08hxho0ddl.execute-api.us-west-2.amazonaws.com/dev/contact"
  apigURL2 = "https://08hxho0ddl.execute-api.us-west-2.amazonaws.com/dev"

  constructor(private httpClient: HttpClient) { }

  postMessage(contactMsg: ContactMessage){
    try{
    const params = contactMsg
  this.httpClient.post(this.apigURL,contactMsg).subscribe((data)=>{
    console.log(data)
    return data;
  },(error) => {
    return error;
  });
} catch(error){
    console.log(error);
    return error;
  }
  }
}
