import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service'
import {DomSanitizer} from '@angular/platform-browser'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list : object
  constructor(private _listService:ContactService,private _domSanitizer : DomSanitizer) { }

  ngOnInit(): void {
    this._listService.list().subscribe(list=>{
      this.list = list  
      })
  }
  picture(imageBinaryData){
    let TYPED_ARRAY = new Uint8Array(imageBinaryData);
    const STRING_CHAR = TYPED_ARRAY.reduce((data, byte)=> {return data + String.fromCharCode(byte);}, '')
    let base64String = btoa(STRING_CHAR);
    return this._domSanitizer.bypassSecurityTrustUrl("data:image;base64," + base64String);
    
  }

}
