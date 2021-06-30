import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalErrorInterceptor } from './services/global-error.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:GlobalErrorInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
