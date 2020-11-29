import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service'
import { DomSanitizer } from '@angular/platform-browser'
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: object
  constructor(private _listService: ContactService, private _domSanitizer: DomSanitizer, private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.SpinnerService.show();
    this._listService.list().subscribe(list => {
      this.list = list
      console.log(list);
      this.SpinnerService.hide();

    })
  }
  picture(imageBinaryData) {
    let TYPED_ARRAY = new Uint8Array(imageBinaryData);
    const STRING_CHAR = TYPED_ARRAY.reduce((data, byte) => { return data + String.fromCharCode(byte); }, '')
    let base64String = btoa(STRING_CHAR);
    return this._domSanitizer.bypassSecurityTrustUrl("data:image;base64," + base64String);

  }

}
