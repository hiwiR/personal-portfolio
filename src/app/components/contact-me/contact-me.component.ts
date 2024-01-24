import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactMessage } from 'src/app/shared/interface/contact-message';
import { ContactService } from 'src/app/shared/service/contact.service';
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  contactForm! : FormGroup;

  constructor(private formBuilder:FormBuilder,private contactService : ContactService){}
  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
        title: ['',Validators.required],
        email: ['',[Validators.required,Validators.email]],
        guestName: ['',Validators.required],
        phone: [''],
        message:['',Validators.required]
    });
  }

  onSubmit(){
    if(this.contactForm.valid){
      const contactMsg : ContactMessage = this.contactForm.value;
      this.contactService.postMessage(contactMsg);
    }else{
      console.log("Missing Data")
    }

  }
}
