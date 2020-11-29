import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';//for convert html to an object
import { ContactService } from '../contact.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  contact = {
    firstName: "",
    lastName: "",
    email: "",
    phone: null,
    gender: "",
    profilePicName: ''

  }
  image: any

  constructor(private _addService: ContactService) { }

  ngOnInit(): void {
  }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file
      this.contact.profilePicName = file.name

    }
  }

  onSubmit(form: NgForm) {
    //add profile pic
    const formData = new FormData()
    formData.append('file', this.image)

    formData.append('firstName', form.value.firstname);
    formData.append('lastName', form.value.lastname);
    formData.append('email', form.value.email);
    formData.append('phone', form.value.phone);
    formData.append('gender', form.value.gender);

    this._addService.add(formData).subscribe()


  }
}
