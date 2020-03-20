import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MessageComponent } from './message/message.component';
import { MessageListComponent } from './message-list/message-list.component';
import { NavComponent } from './nav/nav.component';
import { MessageActionBarComponent } from './message-action-bar/message-action-bar.component';
import { MessageCatagoryComponent } from './message-catagory/message-catagory.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MessageComponent,
    MessageListComponent,
    NavComponent,
    MessageActionBarComponent,
    MessageCatagoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
