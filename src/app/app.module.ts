import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeDialogComponent } from "./welcome-dialog/welcome-dialog.component";
import { TypingAnimationModule } from "./welcome-dialog/welcome-dialog-typing/typing-animation.module";

@NgModule({
  declarations: [
    AppComponent, WelcomeDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TypingAnimationModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
