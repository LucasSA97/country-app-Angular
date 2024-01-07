import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/homePage/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent,
    SideBarComponent,
    ContactComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [
    AboutPageComponent,
    HomePageComponent,
    SideBarComponent,
    ContactComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
