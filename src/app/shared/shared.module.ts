import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/homePage/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent,
    SideBarComponent,
    ContactComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [
    AboutPageComponent,
    HomePageComponent,
    SideBarComponent,
    ContactComponent
  ]
})
export class SharedModule { }
