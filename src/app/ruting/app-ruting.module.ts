import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookComponent} from '../book/book.component';
import {RouterModule,Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import{AppComponent} from '../app.component';



const appRoutes:Routes=[

  {path:'home' , component:HomeComponent},

  {path:'book' , component:BookComponent},

  {path: '' , redirectTo:'home',pathMatch:'full'}

];


@NgModule({
  declarations: [],
  imports: [

    RouterModule.forRoot(appRoutes)

  ],
  exports:[RouterModule]
})
export class RutingModule { }
