import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageListComponent } from './components/image-list/image-list.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { MatCardModule, MatGridListModule } from '@angular/material';
import { FormatNamePipe } from './pipes/format-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    FormatNamePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
