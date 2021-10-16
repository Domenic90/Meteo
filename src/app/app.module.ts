import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather-app/weather-app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApixuService } from './apixu.service';
import { BackgroundComponent } from './background/background.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CittaPrincipaliComponent } from './citta-principali/citta-principali.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    BackgroundComponent,
    NavbarComponent,
    CittaPrincipaliComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
