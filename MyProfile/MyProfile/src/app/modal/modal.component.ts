import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms'  ;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  rForm: FormGroup;
  post: any;
  subject: string = '';
  name: string = '';
  email: string = '';
  display = 'none';
  constructor(private modalService: NgbModal, private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'subject': [null, Validators.compose([Validators.required, Validators.maxLength(100)])],
      'email': [null, Validators.email],
      'validate': ''
    });
  }

   addPost(post){
    this.name = post.name;
    this.subject = post.subject;
    this.email=post.email;
    console.log(this.rForm.value);
   }
  
  openModal(){
    this.display ='block'; 
 }
 onCloseHandled(){
  this.display='none'; 
}
  ngOnInit() {
  }

}
