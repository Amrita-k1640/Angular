import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { BookComponent } from './book/book.component';
import { SortPipePipe } from './sort-pipe.pipe';
import { FormsComponent } from './forms/forms.component'
import {BookService} from './book.service';
import { SearchPipe } from './search.pipe';
import { NavComponent } from './nav/nav.component';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/home.component';
import {RutingModule} from './ruting/app-ruting.module';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    SortPipePipe,
    FormsComponent,
    SearchPipe,
    NavComponent,
    DisplayComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
