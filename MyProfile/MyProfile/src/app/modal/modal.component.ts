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
  submitted = false;

  constructor(private modalService: NgbModal, private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'subject': [null, Validators.compose([Validators.required, Validators.maxLength(100)])],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'validate': ''
    });
  }
  // Added as convenience getter for easy access to form fields
  get f() { return this.rForm.controls; }

  openModal(){
    this.display ='block'; 
 }
  onCloseHandled() {
    this.display = 'none';
  }
  onSubmit() {
    this.submitted = true;

    if (this.rForm.invalid) {
      return;
    }
    if (this.rForm.value["email"].includes("@")) {
      // console.log(this.email);
      console.log("ADya");
    }
    console.log(this.rForm.value);
    alert('SUCCESS')
  }

  ngOnInit() {
  }

}
