import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class ContactService {
_url = "http://localhost:3000/add"

  constructor(private _http : HttpClient,) { }
  add(contact){
    return this._http.post(this._url,contact)
  }
  list(){
    return this._http.get("http://localhost:3000/list")
  }
  contact(id){
    return this._http.get("http://localhost:3000/contact/"+id)
  }
  edit(id,editContact){
    return this._http.put("http://localhost:3000/contact/"+id,editContact,{
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    })
}}
