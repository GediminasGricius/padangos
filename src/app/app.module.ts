import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadangosListComponent } from './components/padangos-list/padangos-list.component';
import { PadangosNewComponent } from './components/padangos-new/padangos-new.component';
import { PadangosUpdateComponent } from './components/padangos-update/padangos-update.component';
import { FormsModule } from '@angular/forms';
import { NotexistsComponent } from './components/notexists/notexists.component';


@NgModule({
  declarations: [
    AppComponent,
    PadangosListComponent,
    PadangosNewComponent,
    PadangosUpdateComponent,
    NotexistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
