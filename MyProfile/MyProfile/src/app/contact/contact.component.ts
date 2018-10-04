import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms'  ;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 
  rForm : FormGroup;
  post:any;
  subject : string ='';
  name:string='';
  email: string = '';

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'name' : [null,Validators.required],
      'subject' : [null, Validators.compose([Validators.required, Validators.maxLength(100)]) ],
      'email' : [null, Validators.email],
      'validate' : ''
    });
   }

   addPost(post){
    this.name = post.name;
    this.subject = post.subject;
    this.email=post.email;
    console.log(this.rForm.value);
   }
  ngOnInit() {
  }

}
