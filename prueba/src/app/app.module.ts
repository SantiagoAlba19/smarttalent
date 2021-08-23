import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponentComponent } from './componentes/account-component/account-component.component';
import { DisplayComponentComponent } from './componentes/display-component/display-component.component';
import { VoterComponentComponent } from './componentes/voter-component/voter-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponentComponent,
    DisplayComponentComponent,
    VoterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
