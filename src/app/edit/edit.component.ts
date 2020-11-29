import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';//for convert html to an object
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service'


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any
  editContact = {

    firstName: "",
    lastName: "",
    email: "",
    phone: null,
    gender: ""
  }
  contact: any
  profilePic: any
  constructor(private _ActivatedRoute: ActivatedRoute, private _editService: ContactService) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(params => {
      this.id = params.get("id")
    })
    this._editService.contact(this.id).subscribe(contact => {
      this.contact = contact
    })
  }
  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profilePic = file
      console.log(file);

    }
  }
  onSubmit(form: NgForm) {
    //PUT profile pic
    const formDataEdit = new FormData()
    formDataEdit.append('file', this.profilePic)

    formDataEdit.append('firstName', form.value.firstname);
    formDataEdit.append('lastName', form.value.lastname);
    formDataEdit.append('email', form.value.email);
    formDataEdit.append('phone', form.value.phone);
    formDataEdit.append('gender', form.value.gender);

    this._editService.edit(this.id, formDataEdit).subscribe();
  }
}
