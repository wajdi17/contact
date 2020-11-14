import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ContactService} from '../contact.service'
import {DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  id:any
  contact : any
  profilePic : any

  constructor(private _Activatedroute:ActivatedRoute,private _contactService:ContactService,private _domSanitizer : DomSanitizer) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
  });
  this._contactService.contact(this.id).subscribe(contact =>{
    this.contact = contact
    console.log(this.contact.img.data.data);
    
    let TYPED_ARRAY = new Uint8Array(this.contact.img.data.data);
    const STRING_CHAR = TYPED_ARRAY.reduce((data, byte)=> {return data + String.fromCharCode(byte);}, '')
    let base64String = btoa(STRING_CHAR);
    this.profilePic = this._domSanitizer.bypassSecurityTrustUrl("data:image;base64," + base64String);
    console.log(this.profilePic);
    
    
  })
// this.imageurl = 'data:imag;base64,' + btoa(this.contact.img.data);
  
  
  }

}
