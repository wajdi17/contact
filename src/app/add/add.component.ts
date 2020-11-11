import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';//for convert html to an object
import {ContactService} from '../contact.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
   contact = {
    firstName : "",
    lastName : "",
    email : "",
    phone : null,
    gender : "",
 
  }

  constructor(private _addService:ContactService) { }

  ngOnInit(): void {
  }

 

onSubmit(form : NgForm){
  this.contact.firstName =form.value.firstname
  this.contact.lastName =form.value.lastname
  this.contact.email = form.value.email
  this.contact.phone = form.value.phone 
  this.contact.gender= form.value.gender
 this._addService.add(this.contact)
 .subscribe(
   data => console.log('Success!',data),
   error => console.error('Error !',error)
 )
}
}
