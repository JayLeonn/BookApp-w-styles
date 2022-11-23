import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
import locFi from '@angular/common/locales/fi';
import { registerLocaleData } from '@angular/common';
import { PluralPipe } from './plural.pipe';
import { SortPipe } from './sort.pipe';

registerLocaleData(locFi);

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    PluralPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
