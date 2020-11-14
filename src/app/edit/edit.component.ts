import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';//for convert html to an object
import { ActivatedRoute } from '@angular/router';
import {ContactService} from '../contact.service'


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id : any
  editContact ={
    
    firstName : "",
    lastName : "",
    email : "",
    phone : null,
    gender : "",
 
  }
  contact : any
  profilePic : any
  constructor(private _ActivatedRoute:ActivatedRoute,private _editService:ContactService) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(params=>{
      this.id = params.get("id")
    })
    this._editService.contact(this.id).subscribe(contact=>{
      this.contact = contact
    })
  }
  selectImage(event){
    if(event.target.files.length>0){
      const file = event.target.files[0];
      this.profilePic = file
    }
  }
  onSubmit(form : NgForm){
    this.editContact.firstName =form.value.firstname
  this.editContact.lastName =form.value.lastname
  this.editContact.email = form.value.email
  this.editContact.phone = form.value.phone 
  this.editContact.gender= form.value.gender

  this._editService.edit(this.id,this.editContact).subscribe(data =>console.log(data));

  //PUT profile pic
  const formData = new FormData()
  formData.append('file',this.profilePic)
  this._editService.addImage(formData).subscribe()


  }
  
  


}
