import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@NgModule({
    imports: [BrowserModule,RouterModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { 

    
}
