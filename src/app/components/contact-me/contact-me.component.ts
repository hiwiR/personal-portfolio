import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactMessage } from 'src/app/shared/interface/contact-message';
import { ContactService } from 'src/app/shared/service/contact.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  contactForm! : FormGroup;

  constructor(private formBuilder:FormBuilder,private contactService : ContactService,private snackBar: MatSnackBar){}
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
      this.contactService.postMessage(contactMsg).subscribe((result)=>{
        this.snackBar.open("Successfully Sent email ", "Cancel",{
          "duration" : 3000,panelClass: 'positioned-snackbar', verticalPosition: 'top'
        })
        console.log(result)
      },
      (error) =>{ this.snackBar.open("Sorry can you please retry", "Cancel",{
        "duration" : 3000,panelClass: 'positioned-snackbar', verticalPosition: 'top'
      })
      console.log(error) 
    });
     
      
    }else{
      console.log("Missing Data")
    }

  }
}
