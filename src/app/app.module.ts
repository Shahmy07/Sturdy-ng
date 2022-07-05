import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { InvoiceComponent } from './invoice/invoice.component';



const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'service', component:ServiceComponent},
  {path:'news', component:NewsComponent},
  {path:'contact', component:ContactComponent},
  {path:'eligibility', component:EligibilityComponent},
  {path:'invoice', component:InvoiceComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    NewsComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    EligibilityComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
