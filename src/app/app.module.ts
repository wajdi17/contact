import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { NgxSpinnerModule } from "ngx-spinner"

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './list/card/card.component';
import { AddComponent } from './add/add.component';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';
import { ContactComponent } from './contact/contact.component';
import { EditComponent } from './edit/edit.component';
const routes : Routes = [
  {path:"add",component:AddComponent},
  {path:"",component:ListComponent},
  {path:"contact/:id",component:ContactComponent},
  {path:"edit/:id",component:EditComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    AddComponent,
    ContactComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    FileUploadModule,
    NgxSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
