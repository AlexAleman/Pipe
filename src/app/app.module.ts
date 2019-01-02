import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { LockUnlockPasswordPipe } from './pipes/lock-unlock-password.pipe';
import { ValueComponent } from './components/value/value.component';

@NgModule({
  declarations: [
    AppComponent,
    LockUnlockPasswordPipe,
    ValueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
