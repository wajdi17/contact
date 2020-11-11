import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() firstName : any
  @Input() lastName : any
  @Input() phone : any
  @Input() id : any


  constructor() { }

  ngOnInit(): void {
  }

}
