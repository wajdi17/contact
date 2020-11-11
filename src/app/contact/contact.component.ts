import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ContactService} from '../contact.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  id:any
  contact : any
  constructor(private _Activatedroute:ActivatedRoute,private _contactService:ContactService) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
  });
  this._contactService.contact(this.id).subscribe(contact =>{
    this.contact = contact
  })
  }

}
