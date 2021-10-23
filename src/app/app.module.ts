import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather-app/weather-app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { BackgroundComponent } from './background/background.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CittaPrincipaliComponent } from './citta-principali/citta-principali.component';
import { FooterComponent } from './footer/footer.component';
import { TitoloCentraleComponent } from './titolo-centrale/titolo-centrale.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    BackgroundComponent,
    NavbarComponent,
    CittaPrincipaliComponent,
    FooterComponent,
    TitoloCentraleComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
