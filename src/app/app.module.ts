import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfoBlockComponent } from './info-block/info-block.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    InfoBlockComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
