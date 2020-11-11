import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list : object
  constructor(private _listService:ContactService) { }

  ngOnInit(): void {
    this._listService.list().subscribe(list=>{
      this.list = list  
      })
  }

}
